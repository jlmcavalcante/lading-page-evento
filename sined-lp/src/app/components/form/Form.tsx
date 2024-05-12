import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Modal } from "flowbite-react";
import { FormTitle } from "./FormStyles";

const apiBaseUrl = "https://sined-api-dev-kvgl74sgpa-rj.a.run.app";

type StateType = {
  "id": string,
  "name": string,
}
type CityType = {
  "id": string,
  "name": string,
  "id_state": string,
}

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
  birthdate: z.coerce
    .string()
    .min(10, "Insira sua data de nascimento.")
    .date(),
  city: z.string().min(1, "Selecione a sua cidade"),
  state: z.string().min(1, "Selecione o seu estado"),
  profession: z.string()
    .min(2, "Indique a sua profissão")
    .transform((prof) => {
      return prof
        .trim()
        .toLowerCase()
    }),
  deficiency: z.string().optional(),
  adaptation: z.string().optional(),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Form() {
  // Estados da aplicação:
  const [isDeficient, setIsDeficient] = useState(false);
  const [needsAdaptation, setNeedsAdaptation] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [states, setStates] = useState<StateType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);
  const [selectedStateId, setSelectedStateId] = useState(null);  // Armazenar o estado selecionado
  const [selectedProfession, setSelectedProfession] = useState(null);  // Armazenar a profissão selecionada
  const [error, setError] = useState(null);  // Controlar erros na requisição

  const {
    register,
    handleSubmit,
    setValue,
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

    loadStates();
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
    const selectedId = event.target.value;
    
    const selectedItem = states.find(item => item.id.toString() === selectedId).name;

    console.log(selectedId);
    if (selectedItem) {
      setValue("state", selectedItem, {shouldValidate: true});
    } else {
      setValue("state", "", {shouldValidate: true});
    }

    setSelectedStateId(selectedId);
  };

  const handleProfessionChange = (event) => {
    const profession = event.target.value;
    setValue("profession", profession, {shouldValidate: true});
    setSelectedProfession(profession);
  };

  const createUser = (data) => {
    console.log(data);
  }

  return (
    <div className="content-container flex-col">
      <div className="py-8">
        <FormTitle>Inscrição</FormTitle>
      </div>

      <form onSubmit={handleSubmit(createUser)} className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-4 mb-8">
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
                <Label htmlFor="birthdate" value="Data de Nascimento:" />
              </div>
              <TextInput type="date" {...register("birthdate")} />

              {errors.birthdate && (
                <span className="">{errors.birthdate.message}</span>
              )}
            </div>

            <div className="flex gap-8">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="state" value="Estado:" />
                </div>
                <Select 
                  id="state" 
                  defaultValue=""
                  onChange={handleStateChange}
                >
                  <option value="">Selecione</option>
                  {states.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>
                {errors.state && (
                  <span className="">{errors.state.message}</span>
                )}
              </div>

              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="city" value="Cidade:" />
                </div>
                <Select 
                  id="city" 
                  {...register("city")} 
                >
                  <option value="">Selecione</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </Select>
                {errors.city && (<span className="">{errors.city.message}</span>)}
              </div>
            </div>
          </div>

          {/* Container da segunda coluna do formulário */}
          <div className="flex flex-col gap-4 flex-1 px-8">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="profession" value="Profissão:" />
              </div>
              <Select
                id="profession" 
                defaultValue=""
                onChange={handleProfessionChange}
              >
                <option value="">Selecione</option>
                <option>Estudante</option>
                <option>Professor</option>
                <option>Coordenador</option>
                <option value=" ">Outro</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="profession" value="Especificação da profissão:" />
              <TextInput
                type="text"
                placeholder="Especifique"
                {...register("profession")}
                disabled={!(selectedProfession == " ")}
              />

              {errors.profession && (<span className="">{errors.profession.message}</span>)}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="accept"
                  checked={isDeficient}
                  onChange={(e) => setIsDeficient(e.target.checked)}
                />
                <Label htmlFor="accept" className="flex">
                  Deficiente
                </Label>
              </div>

              <div>
                <TextInput
                  type="text"
                  placeholder="Especifique a deficiência"
                  disabled={!isDeficient}
                  {...register("deficiency")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="accept"
                  checked={needsAdaptation}
                  onChange={(e) => setNeedsAdaptation(e.target.checked)}
                />
                <Label htmlFor="accept" className="flex">
                  Necessito de assistência
                </Label>
              </div>

              <div>
                <TextInput
                  type="text"
                  placeholder="Especifique o tipo de assistência"
                  disabled={!needsAdaptation}
                  {...register("adaptation")}
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
        <Modal.Header>Confirme seus dados</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="text-base flex flex-col leading-relaxed text-gray-500 dark:text-gray-400 pb-6 border-b">
              <span><span className="text-black">Nome: </span> {watchedValues.name}</span>
              <span><span className="text-black">Email: </span> {watchedValues.email}</span>
              <span><span className="text-black">Nome: </span> {watchedValues.cpf}</span>
              <span><span className="text-black">Data de Nascimento: </span> {watchedValues.birthdate}</span>
              <span><span className="text-black">Estado: </span> {watchedValues.state}</span>
              <span><span className="text-black">Cidade: </span> {watchedValues.city}</span>
              <span><span className="text-black">Profissão: </span> {watchedValues.profession}</span>
              <span><span className="text-black">Deficiência: </span> {watchedValues.deficiency}</span>
              <span><span className="text-black">Assistência: </span> {watchedValues.adaptation}</span>
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
                    termos de uso.
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
