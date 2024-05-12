import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Modal } from "flowbite-react";
import { FormTitle } from "./FormStyles";

const apiBaseUrl = "http://172.16.80.28:3000/api";

// Schema: representação de uma estrutura de dados (objeto gerado do formulário).
const createUserFormSchema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .toLowerCase()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  cpf: z
    .string()
    .min(11, "Insira no mínimo 11 números")
    .max(14, "Insira no máximo 14 caracteres"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório") // Validação de campo obrigatório
    .email("Formato de e-mail inválido") // Validação de email.
    .toLowerCase(),
  nascimento: z.coerce
    .string()
    .min(10, "Insira sua data de nascimento.")
    .date(),
  estado: z.string().min(0, "Selecione um estado"),
  cidade: z.string().min(0, "Selecione uma cidade"),
  entidade: z.string().min(0, "Selecione uma entidade"),
  especificacao: z.string().min(1, "Especifique a entidade/órgão"),
  isDeficient: z.boolean(),
  deficient_description: z.string().min(0, "Especifique a deficiência").optional(),
  needsAdaptation: z.boolean(),
  adaptation_description: z.string().min(0, "Especifique a adaptação").optional(),
});

// Clonar o tipo do objeto através da função infer (Inferência).
type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Form() {
  type StateType = {
    "id": string,
    "name": string,
  }
  type CityType = {
    "id": string,
    "name": string,
    "id_state": string,
  }
  type EntityType = {
    "id": string,
    "name": string,
  }
  const [entities, setEntities] = useState<EntityType[]>([]);
  const [isDeficient, setIsDeficient] = useState(false);
  const [needsAdaptation, setNeedsAdaptation] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [states, setStates] = useState<StateType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);
  // Armazenar o estado selecionado
  const [selectedStateId, setSelectedStateId] = useState(null);
  // Controlar erros na requisição
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<CreateUserFormData>({
    // Objeto de configuração para reconhecimento das regras de validação.
    resolver: zodResolver(createUserFormSchema),
    mode: "onChange", // Validação em tempo real.
  });

  const watchedValues = watch();
  // "https://sined-api-dev-kvgl74sgpa-rj.a.run.app/states"
  // `https://sined-api-dev-kvgl74sgpa-rj.a.run.app/states/${selectedState!.id}/cities`
  
  useEffect(()=>{
    const loadStates = async () => {
      try {
        // Realiza a requisição GET
        const response = await fetch(`${apiBaseUrl}/states/`);
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        // Converte a resposta para JSON
        const data = await response.json();
        // Atualiza o estado
        setStates(data);
      } catch (error) {
        // Atualiza o estado de erro, se houver.
        setError(error.message);
      }
    }
    const loadEntities = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/entities/`);
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();
        setEntities(data);
      } catch (error) {
        setError(error.message);
      }
    }
    loadStates();
    loadEntities();
  }, []);

  useEffect(() => {
    const loadCities = async () => {
      if(!selectedStateId) {
        // Se não houver selectedStateId, não tente carregar as cidades
        setCities([]);
        return;
      }
      try {
        const response = await fetch(`${apiBaseUrl}/states/${selectedStateId}/cities/`);
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        setError(error.message);
      }
    }
    loadCities();
  }, [selectedStateId]);  // Este useEffect é acionado sempre que selectedStateId muda.

  const handleStateChange = (event) => {
    const stateId = event.target.value;
    setSelectedStateId(stateId);
  };

  const createUser = (data) => {
    console.log(data);
  }

  return (
    <div className="content-container flex-col">
      <div className="py-8 px-8">
        <FormTitle>Inscrição</FormTitle>
      </div>

      <form onSubmit={handleSubmit(createUser)} className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-16 mb-8">
          <div className="flex flex-col gap-4 flex-1 px-8">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nome:" />
              </div>
              <TextInput
                type="text"
                placeholder="Insira seu nome"
                {...register("name")}
              />
              {/* se existir um erro para esse campo --> mostrar mensagem de erro */}
              {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="cpf" value="CPF:" />
              </div>
              <TextInput
                type="text"
                placeholder="Insira seu CPF"
                {...register("cpf")}
              />
              {errors.cpf && <span className="">{errors.cpf.message}</span>}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email:" />
              </div>
              <TextInput
                type="email"
                placeholder="nome@exemplo.com"
                {...register("email")}
              />
              {errors.email && <span className="">{errors.email.message}</span>}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="nascimento" value="Data de Nascimento:" />
              </div>
              <TextInput type="date" {...register("nascimento")} />

              {errors.nascimento && (
                <span className="">{errors.nascimento.message}</span>
              )}
            </div>

            <div className="flex gap-8">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="estado" value="Estado:" />
                </div>
                <Select 
                  id="estado" 
                  {...register("estado")}
                  onChange={handleStateChange}
                >
                  <option disabled={true}>Selecione</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </Select>
                {errors.estado && (
                  <span className="">{errors.estado.message}</span>
                )}
              </div>

              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="cidade" value="Cidade:" />
                </div>
                <Select 
                  id="cidade" 
                  {...register("cidade")} 
                >
                  <option disabled={true}>Selecione</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Select>
                {errors.cidade && (
                  <span className="">{errors.cidade.message}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 px-8">
            {/* Container para input de cidade e estado */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="entidade" value="Entidade:" />
              </div>
              <Select
                id="entidade"
                {...register("entidade")} 
              >
                <option disabled={true}>Selecione</option>
                {entities.map((entity) => (
                  <option key={entity.id} value={entity.id}>
                    {entity.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Especificação" value="Especificação:" />
              </div>
              <TextInput
                type="text"
                placeholder="Especifique a entidade/órgão"
                {...register("especificacao")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="isDeficient" value="Deficiente:" />
              </div>
              <div className="flex items-center gap-4"> 
                <Checkbox
                  id="isDeficient"
                  checked={isDeficient}
                  {...register("isDeficient")}
                  onChange={(e) => setIsDeficient(e.target.checked)}
                  className="w-10 h-10 text-[#3c06a4] rounded-lg"
                />
                <TextInput
                  type="text"
                  placeholder="Especifique a deficiência"
                  {...register("deficient_description")}
                  disabled={!isDeficient}
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="needsAdaptation" value="Necessita de adaptação:" />
              </div>
              <div className="flex items-center gap-4">
                <Checkbox
                  id="needsAdaptation"
                  checked={needsAdaptation}
                  {...register("needsAdaptation")}
                  onChange={(e) => setNeedsAdaptation(e.target.checked)}
                  className="w-10 h-10 text-[#3c06a4] rounded-lg"
                />
                <TextInput
                  type="text"
                  placeholder="Especifique a adaptação"
                  {...register("adaptation_description")}
                  disabled={!needsAdaptation}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-2">
          <Button
            type="submit"
            onClick={() => setOpenModal(true)}
            disabled={!isValid}
            className="w-full"
          >
            Confirmar
          </Button>
        </div>
      </form>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Termos de Serviço</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="text-base flex flex-col leading-relaxed text-gray-500 dark:text-gray-400">
              <span>{watchedValues.name}</span>
              <span>{watchedValues.email}</span>
              <span>{watchedValues.cpf}</span>
              <span>{watchedValues.nascimento}</span>
              <span>{watchedValues.estado}</span>
              <span>{watchedValues.cidade}</span>
            </div>
            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="accept"
                  checked={isTermsAccepted}
                  onChange={(e) => setIsTermsAccepted(e.target.checked)}
                />
                <Label htmlFor="accept" className="flex">
                  Li e concordo com os&nbsp;
                  <a
                    href="#"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    termos de.
                  </a>
                </Label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setOpenModal(false)}
            disabled={!(isValid && isTermsAccepted)}
          >
            Confirmar
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
