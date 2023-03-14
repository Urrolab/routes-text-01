import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email:Yup.string().email('Email invalido').required(),
  password:Yup.number().min(1).required().positive().integer(),
});

export const FormLogin = () => {
  const submitForm = (values) => {
     console.log(values)
  };

  const {handleSubmit, handleChange, handleReset, errors, values} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitForm,
    validationSchema: schema,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
          <input 
          className='flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
            type="email" 
            placeholder='email' 
            name='email' 
            value={values.email}
            onChange={handleChange}/>
          <input 
          className='flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
            type="password" 
            placeholder='password' 
            name='password' 
            value={values.password}
            onChange={handleChange}/>
          <button 
            type='submit' className='flex-1 p-2 border-gray-200 rounded-md shadow-sm'>Iniciar sesión</button>
          <button type='reset'>Limpiar</button>
          <br/>
          {errors.email && <span>Email inválido</span>}
          <br/>
          {errors.password && <span>El Pin debe ser númerico y tener al menos 1 carácter</span>}
      </form>
    </div>
  );
};
