import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Modal } from "flowbite-react";


// Schema: representação de uma estrutura de dados (objeto gerado do formulário).
const createUserFormSchema = z.object({
  name: z.string()
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
  cpf: z.string().min(11, 'Insira no mínimo 11 números').max(14, 'Insira no máximo 14 caracteres'),
  email: z.string()
    .min(1, "O e-mail é obrigatório") // Validação de campo obrigatório
    .email("Formato de e-mail inválido") // Validação de email.
    .toLowerCase(),
  nascimento: z.coerce.string().min(10, 'Insira sua data de nascimento.').date(),
  cidade: z.string().min(1, 'Selecione a sua cidade'),
  estado: z.string().min(1, 'Selecione o seu estado'),
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
  const [output, setOutput] = useState();
  const [openModal, setOpenModal] = useState(false);

  function createUser(data: any) {
  }

  const {register, handleSubmit, formState: { errors, isValid }, watch} = useForm<CreateUserFormData>({
    // Objeto de configuração para reconhecimento das regras de validação.
    resolver: zodResolver(createUserFormSchema),
    mode: 'onChange',  // Validação em tempo real.
  });

  const watchedValues = watch();

  const postUser = async () => {
    try {
      const response = await axios.post("https://url.com/post", {
        // Adicionar objeto aqui.
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-container flex-col">
      <div className="mb-8 mt-4">
        <span className="text-2xl font-medium text-[#016D94] uppercase">
          Realizar inscrição
        </span>
        <div className="bg-[#016D94] w-full h-1 rounded-r-lg"></div>
      </div>

      <form onSubmit={handleSubmit(createUser)} className="flex flex-col">
        <div className="flex flex-row gap-16 mb-8">
          <div className="flex flex-col gap-4 flex-1">
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
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nascimento" value="Data de Nascimento:" />
              </div>
              <TextInput type="date" {...register("nascimento")} />

              {errors.nascimento && (
                <span className="">{errors.nascimento.message}</span>
              )}
            </div>

            {/* Container para input de cidade e estado */}
            <div className="flex gap-8 flex-1">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="estado" value="Estado:" />
                </div>
                <Select id="estado" {...register("estado")} defaultValue={0}>
                  <option> </option>
                  <option>Piauí</option>
                  <option>Maranhão</option>
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
                  <option>Teresina</option>
                  <option>Parnaíba</option>
                </Select>
                {errors.cidade && (
                  <span className="">{errors.cidade.message}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          onClick={() => setOpenModal(true)}
          disabled={!isValid}
          className="w-1/4"
        >
          Confirmar
        </Button>
      </form>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Termos de Serviço</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="text-base flex flex-col leading-relaxed text-gray-500 dark:text-gray-400">
              <span>
                {watchedValues.name} 
              </span>
              <span>
                {watchedValues.email}
              </span>
              <span>
                {watchedValues.cpf}
              </span>
              <span>
                {watchedValues.nascimento}
              </span>
              <span>
                {watchedValues.estado}
              </span>
              <span>
                {watchedValues.cidade}
              </span>
            </div>
            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
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
          <Button onClick={() => setOpenModal(false)}>Confirmar</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
