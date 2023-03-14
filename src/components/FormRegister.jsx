import { Formik } from 'formik'
import React from 'react'

const initialValues = {
    nombre: '',
    nro_cliente: '',
    nro_telefono: '',
    pppoe: '',
    vlan: '',
    onu: '',
    puerto: '',
    nap: '',
    conexion: '',
};

export const FormRegister = () => {
  const handleSubmit = (values) => {
      console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <input
            placeholder='Nombre'
            name='nombre'
            type='text'
            value={values.nombre}
            onChange={handleChange}
          />
          <input
            placeholder='Nro. Cliente'
            name='nro_cliente'
            type='number'
            value={values.nro_cliente}
            onChange={handleChange}
          />
          <input
            placeholder='Nro. Telefono'
            name='nro_telefono'
            type='number'
            value={values.nro_telefono}
            onChange={handleChange}
          />
          <input
            placeholder='PPPoE'
            name='pppoe'
            type='text'
            value={values.pppoe}
            onChange={handleChange}
          />
          <input
            placeholder='VLAN'
            name='vlan'
            type='number'
            value={values.vlan}
            onChange={handleChange}
          />
          <input
            placeholder='ONU'
            name='onu'
            type='number'
            value={values.onu}
            onChange={handleChange}
          />
          <input
            placeholder='Puerto'
            name='puerto'
            type='number'
            value={values.puerto}
            onChange={handleChange}
          />
          <input
            placeholder='NAP'
            name='nap'
            type='text'
            value={values.nap}
            onChange={handleChange}
          />
          <input
            placeholder='Conexion'
            name='conexion'
            type='text'
            value={values.conexion}
            onChange={handleChange}
          />
          <div>
            <button type='submit'>Guardar</button>
          </div>
        </form>
      )}
    </Formik>
  );
};
