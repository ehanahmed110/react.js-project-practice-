import React from 'react';
import { BrowserRouter as Router, Routes,Route,   } from 'react-router-dom';
import { UserAdd } from './components/UserAdd';
import Navbar from './components/navbar';
import { UserEdit } from './components/UserEdit';
import UserList from './components/userList';



function App() {
  
   
  return (
    <>
      <div className='container mx-auto'>
         <Navbar/>
          <Routes>
            <Route path='/' element={<UserList/>}></Route>
            <Route path='/adduser' element={ <UserAdd/>}></Route>
            <Route path='/edit/:id' element={ <UserEdit/>}></Route>
          </Routes>
      </div>
    </>
  )
}

export default App
