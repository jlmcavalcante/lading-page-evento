import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Modal } from "flowbite-react";
import { FormTitle } from "./FormStyles";

const apiBaseUrl = "sined-api-c";

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
  cidade: z.string().min(1, "Selecione a sua cidade"),
  estado: z.string().min(1, "Selecione o seu estado"),
  poder: z.string().min(1, "Selecione um poder"),
  especificacao: z.string().min(1, "Insira uma especificação"),
});

function todosAtributosPreenchidos(obj: any): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined) {
        return false;
      }
    }
  }
  return true;
}

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
  const [isDeficient, setIsDeficient] = useState(false);
  const [needsAdaptation, setNeedsAdaptation] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [states, setStates] = useState<StateType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);
  const [selectedState, setselectedState] = useState<StateType>();

  console.log("evaluating states")
  console.log(states);
  console.log(typeof states); // Isso irá retornar 'object' se states for um objeto ou array
  console.log(Array.isArray(states)); // Isso irá retornar true se states for um array


  function createUser(data: any) {}

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

  useEffect(()=>{
    const getStates = async () => {
      try {
        console.log("getStates");
        const apiStatesURL = `${apiBaseUrl}/states`;
        fetch(apiStatesURL).then(
            response => {
                console.log(response);
                try {
                    console.log("try to getStates");
                    return response.json();
                }
                catch (error) {
                    console.log("catched geting states from json");
                    console.log(error);
                }
            }
        ).then(
            data => {
                console.log("data");
                console.log(data);
                if (data.length < 1) {
                    console.log("No states found");
                    return;
                }
                else {
                    console.log("States found");
                    setStates(data);
                }
            }
        );
      } catch (error) {
        console.log("catched error on getStates");
        console.log(error);
      }
    };    
    
    const getCities = async () => {
      try {
        const apiCitiesURL = `${apiBaseUrl}/states/${selectedState!.id}/cities`;
        const response = await axios.get(`apiCitiesURL/states/${selectedState!.id}/cities`);
        setCities(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStates();
    if(selectedState) {
      getCities();
    };
  })

  const postUser = async () => {
    try {
      const apiCreateUserURL = `${apiBaseUrl}/users`;
      const response = await axios.post(apiCreateUserURL, {
        // Adicionar objeto aqui.
      });
    } catch (error) {
      console.log(error);
    }
  };  
  


  return (
    <div className="content-container flex-col">
      <div className="py-8">
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
          </div>

          <div className="flex flex-col gap-4 flex-1 px-8">
            {/* Container para input de cidade e estado */}
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="estado" value="Estado:" />
                </div>
                <Select id="estado" {...register("estado")} defaultValue={0}>
                  <option> </option>
                  {states.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
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
                <Select id="cidade" {...register("cidade")} defaultValue={0}>
                  <option> </option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                </Select>
                {errors.cidade && (
                  <span className="">{errors.cidade.message}</span>
                )}
              </div>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="poder" value="Poder:" />
              </div>
              <Select id="poder" {...register("poder")} defaultValue={""}>
                <option> </option>
                <option>Estudante</option>
                <option>Professor</option>
                <option>Coordenador</option>
                <option>Outro</option>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="Especificação" value="Especificação:" />
              <TextInput
                type="text"
                placeholder="Especifique"
                {...register("especificacao")}
              />
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
