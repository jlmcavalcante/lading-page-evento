import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


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
  cpf: z.string().min(1),
  email: z.string()
    .min(1, "O e-mail é obrigatório") // Validação de campo obrigatório
    .email("Formato de e-mail inválido") // Validação de email.
    .toLowerCase()
    .refine((email) => {
      return email.endsWith("@somosicev.com");
    }, "O e-mail precisa ser do ICEV"),
  nascimento: z.coerce.string().min(10, 'Insira sua data de nascimento.').date(),
  cidade: z.string().min(1),
  estado: z.string().min(1),
});

// Clonar o tipo do objeto através da função infer (Inferência).
type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function Form() {
  const [output, setOutput] = useState("");

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  const {register, handleSubmit, formState: { errors }} = useForm<CreateUserFormData>({
    // Objeto de configuração para reconhecimento das regras de validação.
    resolver: zodResolver(createUserFormSchema),
  });

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
    <div className="max-w-screen-lg mx-auto px-2 flex items-center justify-center">
      <form onSubmit={handleSubmit(createUser)} className="flex flex-col items-center">
        <div className="flex flex-row gap-16 mb-8 flex-auto">
          <div className="flex flex-col gap-4">
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
              <TextInput type="text" placeholder="Insira seu CPF" {...register("cpf")}/>
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

          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nascimento" value="Data de Nascimento:" />
              </div>
              <TextInput type="date" {...register("nascimento")} />

              {errors.nascimento && <span className="">{errors.nascimento.message}</span>}
            </div>

            {/* Container para input de cidade e estado */}
            <div className="flex gap-8">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="estado" value="Estado:" />
                </div>
                <Select id="estado" {...register("estado")} defaultValue={0}>
                  <option> </option>
                  <option>Piauí</option>
                </Select>
                {errors.estado && (
                  <span className="">{errors.estado.message}</span>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cidade" value="Cidade:" />
                </div>
                <Select id="cidade" {...register("cidade")} defaultValue={0}>
                  <option> </option>
                  <option>Teresina</option>
                </Select>
                {errors.cidade && <span className="">{errors.cidade.message}</span>}
              </div>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="wx-screen-lg">Confirmar</Button>
      </form>

      <pre>{output}</pre>
    </div>
  );
}
