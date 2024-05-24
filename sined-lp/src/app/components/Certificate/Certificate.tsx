import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, Modal, Radio, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormTitle } from "../form/FormStyles";
import { useState } from "react";
import { MdInfo } from "react-icons/md";
import { CreateUserFormData } from "../form/Form";


const apiBaseUrl = "https://sined.tcepi.tc.br/api";

const searchSchema = z.object({
  cpf: z
    .string() // must have 11 or 14 characters
    .min(11, "O CPF deve ter 11 caracteres apenas números")
    .max(11, "O CPF deve ter 11 caracteres apenas números")
    .regex(/^\d+$/, "O CPF deve conter apenas números"),
});

// Clonar o tipo do objeto através da função infer (Inferência).
type Search = z.infer<typeof searchSchema>;


export default function Certificate() {
  const [userData, setUserData] = useState<CreateUserFormData>();
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);


  const { register, handleSubmit, formState: { errors, isValid }} = useForm<Search>({
    resolver: zodResolver(searchSchema),
    mode: "onChange",
  });

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const getCertificate = (cpf) => {
    if (isRequestSent) {
      console.log("Requisição já foi enviada.");
      return;
    }

    const getImage = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/certificado/${cpf}`);
        // const response = await fetch("/apoiador-1.jpeg"); // para testar com uma imagem local

        if (!response.ok) {
          throw new Error('Falha ao baixar o certificado');
        }

        const blobUrl = URL.createObjectURL(await response.blob());
        
        // Cria um elemento <a> temporário para fazer o download
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = `imagem-${cpf}`;
  
        // Simula um clique no link para iniciar o download
        document.body.appendChild(downloadLink);
        downloadLink.click();
  
        // Limpa o link e a URL do Blob
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(blobUrl);

        setIsRequestSent(true);
      } catch (error) {
        console.error('Erro da requisição: ', error);
      }
    }
    getImage();
  }

  const getUserData = async (form: Search) => {
    console.log("get user data: " + form.cpf);
    setLoading(true);
    try {
      const response = await fetch(`${apiBaseUrl}/users?cpf=${form.cpf}`);

      if(!response.ok) {
        throw new Error('Falha ao obter dados do usuário');
      }

      const data = await response.json();
      setUserData(data[0]);
      console.log(data[0]);
      setOpenModal(true);
    } catch (error) {
      console.error('Erro da requisição: ', error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="content-container flex-col">
      <div className="pt-8 px-8">
        <FormTitle>Consultar Inscrição</FormTitle>
      </div>
      <p className="text-md text-gray-500 dark:text-gray-400 mb-8 px-8 pt-4">
        <div className="flex flex-row gap-2">
          <span><MdInfo/></span>
          <span className="font-bold">Atenção:</span>
        </div>
        Consulte aqui os dados da sua inscrição, informando o seu CPF, gere o QR Code de presença e faça o download do certificado de participação no evento, que estará disponível após o evento.
      </p>
      <form onSubmit={handleSubmit(getUserData)} className="pb-8 px-8 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-2 w-full">
              <Label htmlFor="cpf" value="CPF:" />
            </div>
            <div className="flex lg:flex-row flex-col gap-8">
              <div className="flex-1">
                <TextInput
                    type="text"
                    placeholder="Insira apenas os números do seu CPF"
                    {...register("cpf")}
                />
                {errors.cpf && (
                  <span className="text-red-700 font-italic">{errors.cpf.message}</span>
                )}
              </div>
                {/* Botão que chama a função de carregar os dados do usuário e abre o Modal */}
                {/* Habilitar o botão apenas quando inserir o CPF */}
                <Button type="submit" className="lg:w-2/5 max-lg:w-full lg:flex-0.5 justify-center items-center" disabled={!isValid || loading}>
                  Confirmar
                </Button>
            </div>
          </div>
        </div>
      </form>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          Obtenha os seus recursos
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p>
              Por favor, confirme os dados abaixo e selecione o que deseja:
            </p>
            <div className="text-base flex flex-col leading-relaxed text-gray-500 dark:text-gray-400 pb-6 pl-6">
              <div className="flex items-center gap-2">
                <span className="font-bold">Nome:</span>
                <span>{userData?.full_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>{userData?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">CPF:</span>
                <span>{userData?.cpf}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Data de Nascimento:</span>
                <span>{formatDate(userData?.birth_date)}</span>
              </div>
            </div>

          </div>

          <div className="flex flex-row gap-8">
            {/* Botão que chama a função obter QrCode */}
            <Button className="flex-1">
              QrCode
            </Button>

            {/* Botão que chama a função de obter certificado */}
            <Button className="flex-1">
              Certificado
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
