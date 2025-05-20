import React from 'react'
import { New } from './components/new'
import { Form } from './components/form'
import { AutoComplete } from 'primereact/autocomplete'
import { Dropdown } from './components/dropdown'
import { ObTmpAuto } from './components/ObTmpAuto'
import { FormComponent } from './components/formComponent'
import { Casecade } from './components/casecade'




function App() {


  return (
    <>
    <div className='container mx-auto space-y-4'>
      <h1 className='uppercase text-center text-3xl font-bold mt-4'>prime react</h1>
      <New/>
      <Form/>
      <AutoComplete />
      <Dropdown/>
      <ObTmpAuto/>
      {/* <FormComponent/> */}
      <Casecade />
      </div>
    </>
  )
}

export default App
