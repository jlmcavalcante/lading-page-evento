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
      return email.endsWith("@sined.com");
    }, "O e-mail precisa ser @sined.com"),
  nascimento: z.coerce.string().min(10, 'Insira sua data de nascimento.').date(),
  cidade: z.string().min(1),
  estado: z.string().min(1),
  poder: z.string().min(1),
  orgao: z.string().min(1),
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
    <div className="content-container flex-col">
      <div className="mb-8 mt-4">
        <span className="text-2xl font-medium text-[#016D94] uppercase">
          Realizar inscrição
        </span>
        <div className="bg-[#016D94] w-full h-1 rounded-r-lg"></div>
      </div>

      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col"
      >
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

            {/* Container para input de cargo e função */}
            <div className="flex gap-8 flex-1">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="poder" value="Poder:" />
                </div>
                <Select id="poder" {...register("poder")} defaultValue={0}>
                  <option> </option>
                  <option>Executivo</option>
                  <option>Legislativo</option>
                </Select>
                {errors.poder && (
                  <span className="">{errors.poder.message}</span>
                )}
              </div>

              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="orgao" value="Órgão:" />
                </div>
                <Select id="orgao" {...register("orgao")} defaultValue={0}>
                  <option> </option>
                  <option>Ministério de ...</option>
                  <option>Tribunal de ...</option>
                </Select>
                {errors.cidade && (
                  <span className="">{errors.cidade.message}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-1/4">
          Confirmar
        </Button>
      </form>

      <pre>{output}</pre>
    </div>
  );
}
