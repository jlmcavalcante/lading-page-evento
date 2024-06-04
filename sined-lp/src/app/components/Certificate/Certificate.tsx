import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, Modal, Radio, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormTitle } from "../form/FormStyles";
import { useState } from "react";
import { MdInfo } from "react-icons/md";
import { CreateUserFormData } from "../form/Form";
import { MainContainer } from "../About/AboutStyles";

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
type User = CreateUserFormData & {id: number};


export default function Certificate() {
  const [userData, setUserData] = useState<User>();
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);


  const { register, handleSubmit, formState: { errors, isValid }} = useForm<Search>({
    resolver: zodResolver(searchSchema),
    mode: "onChange",
  });

  const formatDate = (dateString) => {
    if(userData) {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    }
  };

  const getCertificate = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/users/${userData.id}/certificate/`);
      // const response = await fetch("/apoiador-1.jpeg"); // para testar com uma imagem local

      if (!response.ok) {
        throw new Error('Falha ao baixar o certificado');
      }

      const blobUrl = URL.createObjectURL(await response.blob());
      
      // Cria um elemento <a> temporário para fazer o download
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = `imagem-${userData.id}`;

      // Simula um clique no link para iniciar o download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Limpa o link e a URL do Blob
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Erro da requisição: ', error);
    }
  }  
  
  const getQrcode = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/users/${userData.id}/badge/`);

      if (!response.ok) {
        throw new Error('Falha ao obter o QrCode');
      }

      const blobUrl = URL.createObjectURL(await response.blob());
      
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = `imagem-${userData.id}`;

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Erro da requisição: ', error);
    }
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
      if (data.length === 0) {
        setUserData(null);
      } else {
        setUserData(data[0]);
      }
      setOpenModal(true);
    } catch (error) {
      console.error('Erro da requisição: ', error);
      setOpenModal(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainContainer className="flex-col">
      <div className="pt-4 px-8">
        <FormTitle>Consultar Inscrição</FormTitle>
      </div>
      <div className="text-md text-gray-500 dark:text-gray-400 mb-8 px-10 lg:px-52 pt-2 flex flex-col 2xl:px-96">
        <div className="flex flex-row gap-2">
          <span><MdInfo/></span>
          <span className="font-bold">Informação:</span>
        </div>
        
        Consulte aqui os dados da sua inscrição, informando o seu CPF, gere o QR Code de presença e faça o download do certificado de participação no evento, que estará disponível após o evento.
      </div>
      <form onSubmit={handleSubmit(getUserData)} className="pb-8 flex flex-col w-full px-10 lg:px-52 2xl:px-96">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
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
          {userData ? 'Você está inscrito no SINED VI' : 'Cadastro Necessário'}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {userData ? (
              <>
                <p className="text-sm text-gray-500 dark:text-gray-400 pb-1 pl-4 pr-4 text-justify"
                >Confira abaixo algumas de suas informações cadastrais e certifique-se de que estão corretas, tendo em vista que serão utilizadas para gerar seu certificado de participação. Em caso de divergência, entre em contato conosco através do numero de telefone 
                <span className="ml-1 text-blue-400 dark:text-blue-400">
                  (86) 3215-3800.
                </span>
                <span className="font-medium ml-1">
                  Recomendamos, também que realize o screenshot desta tela em caso de necessidade de comprovação da inscrição no evento.
                </span></p>
                <div className="flex flex-row pl-4 pr-4 gap-2">
                  <MdInfo className="text-6xl text-gray-500 dark:text-gray-400"/>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-justify"
                  >O QR Code de presença estará disponível durante o evento e será utilizado por nosso staff para registrar sua presença. Já o certificado de participação estará disponível após o evento.</p>
                </div>
                
                <div className="text-base flex flex-col leading-relaxed text-gray-500 dark:text-gray-400 pb-4 pl-4">
                  <div className="flex items-center gap-2 max-md:text-sm">
                    <span className="font-bold">Nome:</span>
                    <span>{userData.full_name}</span>
                  </div>
                  <div className="flex items-center gap-2 max-md:text-sm">
                    <span className="font-bold">Email:</span>
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-2 max-md:text-sm">
                    <span className="font-bold">CPF:</span>
                    <span>{userData.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.***.***-$4")}</span>
                  </div>
                  <div className="flex items-center gap-2 max-md:text-sm">
                    <span className="font-bold">Data de Nascimento:</span>
                    <span>{formatDate(userData.birth_date)}</span>
                  </div>
                </div>
                <div className="flex flex-row gap-8 pl-4 pr-4">
                  <Button className="flex-1" onClick={getQrcode} disabled={new Date() < new Date("2024-05-31")}>
                    QR Code
                  </Button>
                  <Button className="flex-1" onClick={getCertificate} disabled={new Date() < new Date("2024-08-06")}>
                    Certificado
                  </Button>
                </div>
              </>
            ) : (
              <p>Não foi possível encontrar nenhum usuário com esse CPF, certifique-se de que você já fez o seu cadastro.</p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </MainContainer>
  );
}
