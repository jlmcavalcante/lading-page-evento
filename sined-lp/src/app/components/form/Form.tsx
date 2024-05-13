import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Modal } from "flowbite-react";
import { FormTitle } from "./FormStyles";

const apiBaseUrl = "https://sined.tcepi.tc.br/api";
//const apiBaseUrl = "https://172.16.80.28/api";

// Schema: representação de uma estrutura de dados (objeto gerado do formulário).
const createUserFormSchema = z.object({
  cpf: z
    .string() // must have 11 or 14 characters
    .min(11, "O CPF deve ter 11 caracteres")
    .max(14, "O CPF deve ter 14 caracteres")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    .transform((value) => {
      return value.replace(/\D/g, "");
    }),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório") // Validação de campo obrigatório
    .email("Formato de e-mail inválido") // Validação de email.
    .toLowerCase(),
  full_name: z
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
  birth_date: z.coerce
    .string()
    .min(10, "Insira sua data de nascimento.")
    .date(),
  id_state: z.string().min(0, "Selecione um estado").transform((value) => {
    return parseInt(value);
  }),
  id_city: z.string().min(0, "Selecione uma cidade").transform((value) => {
    return parseInt(value);
  }),
  id_entity: z.string().min(0, "Selecione uma entidade").transform((value) => {
    return parseInt(value);
  }),
  entity_description: z.string().min(1, "Especifique a entidade/órgão"),
  is_disabled: z.boolean(),
  disabled_description: z.string().min(0, "Especifique a deficiência").optional(),
  needs_adaptation: z.boolean(),
  adaptation_description: z.string().min(0, "Especifique a adaptação").optional(),
});

// Clonar o tipo do objeto através da função infer (Inferência).
type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Form() {
  type StateType = {
    id: number,
    name: string,
  }
  type CityType = {
    id: number,
    name: string,
    id_state: number,
  }
  type EntityType = {
    id: number,
    name: string,
  }
  const [userData, setUserData] = useState<CreateUserFormData>();
  const [entities, setEntities] = useState<EntityType[]>([]);
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
    console.log(errors);
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
        console.log(data);
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

  const createUser = async () => {
    console.log("sending data")
    console.log(userData);
    let disabledDescription = "Nada"
    let adaptationDescription = "Nada"
    if (userData.is_disabled) {
      disabledDescription = userData.disabled_description;
    }
    if (userData.needs_adaptation) {
      adaptationDescription = userData.adaptation_description;
    }
    const consolidatedData = {
      cpf: userData.cpf,
      email: userData.email,
      full_name: userData.full_name,
      birth_date: userData.birth_date,
      id_state: userData.id_state,
      id_city: userData.id_city,
      id_entity: userData.id_entity,
      entity_description: userData.entity_description,
      is_disabled: userData.is_disabled,
      disabled_description: disabledDescription,
      needs_adaptation: userData.needs_adaptation,
      adaptation_description: adaptationDescription
    };
    console.log(consolidatedData);
    try {
      const response = await fetch(`${apiBaseUrl}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consolidatedData),
      });
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="content-container flex-col">
      <div className="py-8 px-8">
        <FormTitle>Inscrição</FormTitle>
      </div>

      <form onSubmit={handleSubmit(setUserData)} className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-y-4cidade gap-x-16 mb-8">
          <div className="flex flex-col gap-4 flex-1 px-8">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nome:" />
              </div>
              <TextInput
                type="text"
                placeholder="Insira seu nome"
                {...register("full_name")}
              />
              {/* se existir um erro para esse campo --> mostrar mensagem de erro */}
              {errors.full_name && <span>{errors.full_name.message}</span>}
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
              <TextInput type="date" {...register("birth_date")} />

              {errors.birth_date && (
                <span className="">{errors.birth_date.message}</span>
              )}
            </div>

            <div className="flex gap-8">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="state" value="Estado:" />
                </div>
                <Select 
                  id="estado" 
                  {...register("id_state")}
                  onChange={handleStateChange}
                >
                  <option disabled={true}>Selecione</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </Select>
                {errors.id_state && (
                  <span className="">
                    {errors.id_state.message}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="city" value="Cidade:" />
                </div>
                <Select 
                  id="cidade" 
                  {...register("id_city")}
                >
                  <option disabled={true}>Selecione</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Select>
                {errors.id_city && (
                  <span className="">
                    {errors.id_city.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 px-8 max-md:mt-2">
            {/* Container para input de cidade e estado */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="id_entity" value="Ocupação:" />
              </div>
              <Select
                id="id_entity"
                {...register("id_entity")} 
              >
                <option disabled={true}>Selecione</option>
                {entities.map((entity) => (
                  <option key={entity.id} value={entity.id}>
                    {entity.name}
                  </option>
                ))}
              </Select>
              {
                errors.id_entity && <span>{errors.id_entity.message}</span>
              }
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="Especificação" value="Especificação:" />
              </div>
              <TextInput
                type="text"
                placeholder="Especifique a entidade/órgão"
                {...register("entity_description")}
              />
              {
                errors.entity_description && <span>{errors.entity_description.message}</span>
              }
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="isDeficient" value="Deficiente:" />
              </div>
              <div className="flex items-center gap-4"> 
                <Checkbox
                  id="isDeficient"
                  checked={isDeficient}
                  {...register("is_disabled")}
                  onChange={(e) => setIsDeficient(e.target.checked)}
                  className="w-10 h-10 text-[#3c06a4] rounded-lg"
                />
                <TextInput
                  type="text"
                  placeholder="Especifique a deficiência"
                  defaultValue={""}
                  {...register("disabled_description")}
                  disabled={!isDeficient}
                  className="w-full"
                />
                {
                  errors.is_disabled && <span>{errors.is_disabled.message}</span>
                }
                {
                  errors.disabled_description && <span>{errors.disabled_description.message}</span>
                }
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
                  {...register("needs_adaptation")}
                  onChange={(e) => setNeedsAdaptation(e.target.checked)}
                  className="w-10 h-10 text-[#3c06a4] rounded-lg"
                />
                <TextInput
                  type="text"
                  placeholder="Especifique a adaptação"
                  defaultValue={""}
                  {...register("adaptation_description")}
                  disabled={!needsAdaptation}
                  className="w-full"
                />
                {
                  errors.needs_adaptation && <span>{errors.needs_adaptation.message}</span>
                }
                {
                  errors.adaptation_description && <span>{errors.adaptation_description.message}</span>
                }
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
            <p>
              Por favor, confirme os dados abaixo e aceite os termos de serviço
              para finalizar a inscrição.
            </p>
            <div className="text-base flex flex-col leading-relaxed text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-bold">Nome:</span>
                <span>{userData?.full_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">CPF:</span>
                <span>{userData?.cpf}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>{userData?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Data de Nascimento:</span>
                <span>{userData?.birth_date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Estado:</span>
                <span>{
                  states.find((state) => state.id === userData?.id_state)?.name
                }</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Cidade:</span>
                <span>{
                  //cities.find((city) => city.id === parseInt(userData?.id_city))?.name
                  cities.find((city) => city.id === userData?.id_city)?.name
                }</span>
              </div>
              <div>
                <span className="font-bold gap-2">Ocupação:</span>
                <span>{
                  entities.find((entity) => entity.id === userData?.id_entity)?.name
                }</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Especificação:</span>
                <span>{userData?.entity_description}</span>
              </div>
              {isDeficient && (
                <div className="flex items-center gap-2">
                  <span className="font-bold">Deficiente:</span>
                  <span>{userData?.disabled_description}</span>
                </div>
              )}
              {needsAdaptation && (
                <div className="flex items-center gap-2">
                  <span className="font-bold">Necessita de adaptação:</span>
                  <span>{userData?.adaptation_description}</span>
                </div>
              )}
            </div>

            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="accept"
                  checked={isTermsAccepted}
                  onChange={(e) => setIsTermsAccepted(e.target.checked)}
                />
                <Label htmlFor="accept" className="flex">
                  Li e concordo com os termos de serviço &nbsp;
                  <a
                    href="#"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Clique aqui para acessar os termos de serviço.
                  </a>
                </Label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
                createUser();
                setOpenModal(false);
              }
            }
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

    //<Modal show={showSucessModal} onClose={() => setOpenModal(false)}>
  );
}
