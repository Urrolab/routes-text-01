import React, { lazy, Suspense } from 'react';
import LoginForm from './components/LoginForm.jsx';
const BackgroundImage = lazy(() => import('./components/BackgroundImage.jsx'));

const Login = () => {
  return (
    <div className='grid grid-cols-l sm:grid-cols-2 h-screen -full'>
      <Suspense fallback={<div>Cargando...</div>}>
        {window.innerWidth >= 640 && <BackgroundImage imageUrl='https://www.esi-business-school.com/wp-content/uploads/2022/04/AdobeStock_462193658-scaled.jpeg'/>}
      </Suspense>
      <div className='bg-perso flex flex-col justify-center'>
       <LoginForm/>
      </div>
    </div>
  );
}

export default Login