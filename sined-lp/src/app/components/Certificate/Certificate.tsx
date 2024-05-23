import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Label, Modal, Radio, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormTitle } from "../form/FormStyles";
import { useState } from "react";


const apiBaseUrl = "https://sined.tcepi.tc.br/api";

const certificateFormSchema = z.object({
  cpf: z
    .string() // must have 11 or 14 characters
    .min(11, "O CPF deve ter 11 caracteres apenas números")
    .max(11, "O CPF deve ter 11 caracteres apenas números")
    .regex(/^\d+$/, "O CPF deve conter apenas números"),
  type: z.string().min(1, "Selecione um formato"),
});

// Clonar o tipo do objeto através da função infer (Inferência).
type certificateFormData = z.infer<typeof certificateFormSchema>;


export default function Certificate() {
  const [userData, setUserData] = useState<certificateFormData>();
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    watch,
  } = useForm<certificateFormData>({
    // Objeto de configuração para reconhecimento das regras de validação.
    resolver: zodResolver(certificateFormSchema),
    mode: "onChange", // Validação em tempo real.
  });

  const getCertificate = (formValue: certificateFormData) => {
    if (isRequestSent) {
      console.log("Requisição já foi enviada.");
      return;
    }

    const getImage = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/certificado/${formValue.cpf}/${formValue.type}`);
        // const response = await fetch("/apoiador-1.jpeg"); // para testar com uma imagem local

        if (!response.ok) {
          throw new Error('Falha ao baixar o certificado');
        }

        const blobUrl = URL.createObjectURL(await response.blob());
        
        // Cria um elemento <a> temporário para fazer o download
        const downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        downloadLink.download = `imagem-${formValue.cpf}`;
  
        // Simula um clique no link para iniciar o download
        document.body.appendChild(downloadLink);
        downloadLink.click();
  
        // Limpa o link e a URL do Blob
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(blobUrl);

        setIsRequestSent(true);
      } catch (error) {
        console.error('Erro ao fazer o download do certificado:', error);
      }
    }

    getImage();
  }

  return (
    <div className="content-container flex-col">
      <div className="py-8 px-8">
        <FormTitle>Consultar Inscrição</FormTitle>
      </div>
      <form onSubmit={handleSubmit(getCertificate)} className="pb-8 px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="cpf" value="CPF:" />
            </div>
            <TextInput
              type="text"
              placeholder="Insira apenas os números do seu CPF"
              {...register("cpf")}
            />
            {errors.cpf && (
              <span className="text-red-700 font-italic">{errors.cpf.message}</span>
            )}
          </div>
          <Button className="w-full" onClick={() => setOpenModal(true)}>
            Confirmar
          </Button>
        </div>
      </form>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          Obtenha o certificado
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(getCertificate)} className="p-4">
            <div className="py-8">
              <fieldset className="flex max-w-md flex-row gap-4">
                <legend className="mb-4">Formato:</legend>
                <div className="flex items-center gap-2">
                  <Radio id="qrcode" value="qrcode" {...register("type")} defaultChecked />
                  <Label htmlFor="qrcode">QRcode</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="image" name="countries" {...register("type")} value="image" />
                  <Label htmlFor="image">Imagem</Label>
                </div>
              </fieldset>
            </div>

            <div className="">
              <Button className="w-full" onClick={() => setOpenModal(true)}>
                Obter certificado
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
