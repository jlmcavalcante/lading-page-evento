/**
 * TO-DO
 * 
 * []- Validação/ transformação
 * []- Field Arrays
 * []- Upload de arquivos
 * []- Composition Pattern
 */
import { useState } from 'react';
import '../ui/styles/Form.scss';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


// Schema: representação de uma estrutura de dados (objeto gerado do formulário).
const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório')  // Validação de campo obrigatório
    .email('Formato de e-mail inválido')  // Validação de email.
    .toLowerCase(),
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres'),  // Validação da quantidade de caracteres.
})

// Clonar o tipo do objeto através da função infer (Inferência).
type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Form() {
  const [output, setOutput] = useState('');
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm<CreateUserFormData>({
    // Objeto de configuração para reconhecimento das regras de validação.
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <main className='component-container'>
      <form 
        onSubmit={handleSubmit(createUser)}
        className='form-container'
      >
        <div className='input-container'>
          <label htmlFor="">E-mail:</label>
          <input 
            type="email"
            {...register('email')}
          />

          {/* se existir um erro para esse campo --> mostrar mensagem de erro */}
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className='input-container'>
          <label htmlFor="">Senha:</label>
          <input 
            type="password"
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        
        <button 
          type="submit"
          className='sub-btn'
        >
          Salvar
        </button>
      </form>

      <pre>
        {output}
      </pre>
    </main>
  )
}
