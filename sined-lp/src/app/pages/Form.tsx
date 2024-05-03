import { useState } from 'react';
import '../ui/styles/Form.scss'
import { useForm } from 'react-hook-form'

export default function Form() {
  const [output, setOutput] = useState('');
  const { register, handleSubmit } = useForm();

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
        </div>

        <div className='input-container'>
          <label htmlFor="">Senha:</label>
          <input 
            type="password"
            {...register('password')}
          />
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
