import React from 'react';

const LoginForm = () => {
  return (
    <form className='max-w-[400px] w-full mx-auto bg-[#0023359d] p-8 px-8 rounded-lg ring-perso-hover'>
      <h2 className='m-5 text-4xl text-[#9AFE20] font-bold text-center'>INGRESAR</h2>
      <div className='flex flex-col text-[#EAEBED] py-2'>
        <label>Legajo / ID</label>
        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:bg-[#011119] ring-perso-focus' type="text" />
      </div>
      <div className='flex flex-col text-[#EAEBED] py-2'>
        <label>Password</label>
        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:bg-[#011119] ring-perso-focus' type="Password" />
      </div>
      <div className='flex justify-between text-gray-400 py-2'>
        <p className='flex items-center'><input className='mr-2' type="checkbox"/> Recordame</p>
        <a className='hover:text-[#9AFE20] active:text-[#9afe2080] transition duration-100' href='#'>Olvide mi contraseña</a>
      </div>
      <div className='flex justify-evenly'>
        <button className='ring-1 ring-[#E3F7DE] transition duration-75 shadow-md hover:ring-[#9AFE20] hover:text-[#9AFE20] ease-in-out active:ring-[#9afe2080] active:text-[#9afe2080] w-full my-5 m-[15px] py-2 bg-[#9AFE20] bg-transparent text-[#EAEBED] text-[150%] font-bold rounded-lg'>Login</button>
        <button className='ring-1 ring-[#E3F7DE] transition duration-75 shadow-md hover:ring-[#9AFE20] hover:text-[#9AFE20] ease-in-out active:ring-[#9afe2080] active:text-[#9afe2080] w-full my-5 m-[15px] py-2 bg-[#9AFE20] bg-transparent text-[#EAEBED] text-[150%] font-bold rounded-lg'>Register</button>
      </div>
    </form>
  );
};

export default LoginForm;
