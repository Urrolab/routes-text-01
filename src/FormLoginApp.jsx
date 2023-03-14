import React from "react";
import { BrowserRouter, Link, Route, Routes } from  'react-router-dom'

const Home = () => <h1 className="bg-blue-200">Home Page</h1>
const Notes = () => <h1 className="bg-blue-300">Notes Page</h1>
const Users = () => <h1 className="bg-blue-400">Users Page</h1>

const inlineStyles = {
  padding: 5,
  margin: 5,
  color: 'red',
  textDecoration: 'none',
}

const FormLoginApp = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/' style={inlineStyles}>
          home
        </Link>
        <Link to='/notes' style={inlineStyles}>
          notes
        </Link>
        <Link to='/users' style={inlineStyles}>
          users
        </Link>
      </header>
      <Routes>
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default FormLoginApp;
