import React, { useState } from 'react';
import Input from './Input';

const LoginForm = () => {

    const [ user, setUser]  = useState('');
    const [ password, setPassword] = useState('');
    const [ passwordError, setPasswordError] = useState(false);
    const [ isLogin, setIsLogin] = useState(false);
    const [ hasError, setHasError] = useState(false);

    function handleChange(name, value) {
      if (name === 'legajo') {
        setUser(value);
        setHasError(false);
      } else {
        if (value.length < 6) {
          setPasswordError(true);
          setHasError(false);
        } else {
          setPasswordError(false);
          setPassword(value)
          setHasError(false);
        }
      }
    };

    function ifMatch(param) {
      if (param.user.length > 0 && param.password.length > 6) {
        if(param.user === 'urro' && param.password === 'Urro0303456') {
          const { user, password } = param;
            let ac = { user, password };
            let account = JSON.stringify(ac);
            localStorage.setItem('account', account);
            setIsLogin(true);
        } else {
            setIsLogin(false);
            setHasError(true);
        }
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    }

    function handleSubmit() {
      let account = { user, password }
      if(account) {
        ifMatch(account);
      }
    };

  return (
    <div>
      { isLogin ? 
      <>
        <h1 className='flex justify-center'>Hola!, {user}</h1>
        <label className='flex justify-center'>Felicitaciones, estas logueado.</label>
      </>
      :
    <form className='max-w-[400px] w-full mx-auto bg-[#0023359d] p-8 px-8 rounded-lg ring-perso-hover'>
      { hasError && <label className='text-red-600 flex justify-center text-center'>Su contraseña o usuario son incorrectos, o no existen en nuestra plataforma</label>}
      <h2 className='m-5 text-4xl text-[#9AFE20] font-bold text-center'>INGRESÁ</h2>
      <div className='flex flex-col text-[#EAEBED] py-2'>
        <label>Legajo / ID</label>
        <Input
        attribute={{
          id: 'legajo',
          name: 'legajo',
          type: 'text',
          placeholder: 'Ingrese su legajo o ID',
        }} 
        handleChange={handleChange}
        />
      </div>
      <div className='flex flex-col text-[#EAEBED] py-2'>
        <label>Contraseña</label>
        <Input attribute={{
          id: 'password',
          name: 'password',
          type: 'password',
          placeholder: 'Ingrese su contraseña',
        }}
        handleChange={handleChange}
        param={passwordError}
        />
        { passwordError && <label className='text-red-600 flex justify-center pt-4'>Contraseña inválida o incompleta</label> }
      </div>
      <div className='flex justify-between text-gray-400 py-2'>
        <p className='flex items-center'><input className='mr-2' type="checkbox"/> Recordame</p>
        <a className='hover:text-[#9AFE20] active:text-[#9afe2080] transition duration-100' href='#'>Olvide mi contraseña</a>
      </div>
      <div className='flex justify-evenly'>
        <button onClick={handleSubmit} className='button-perso' type='button'>Entrar</button>
        <button className='button-perso' type='button'>Registro</button>
      </div>
    </form>
  }
    </div>
  );
};

export default LoginForm;
