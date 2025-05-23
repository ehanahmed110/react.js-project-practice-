import React from 'react'
// import DataTableWithSortingFiltering from './components/new'
import { Form } from './components/form'
import { AutoComplete } from 'primereact/autocomplete'
import { Dropdown } from './components/dropdown'
import { ObTmpAuto } from './components/ObTmpAuto'
import { FormComponent } from './components/formComponent'
import { Casecade } from './components/casecade'
import  { New } from './components/new'
import { PracticeComponent } from './components/practiceComponent'
import { Barchart } from './components/barchart'
import { Doughnutchart } from './components/doughnutchart'
import { Linechart } from './components/linechart'
import { Toasty } from './components/toast'
import { Split } from './components/splitter'
import BasicDemo from './components/steppery'
import { Addmulti } from './components/addmulti'
import { FormProvider } from './context.jsx/FormContext'




function App() {

  
  return (
    <>
    <div className='container mx-auto space-y-4'>
      <h1 className='uppercase text-center text-3xl font-bold mt-8 mb-4'>prime react</h1>
     {/* <New/>
     <PracticeComponent/>
     <Form/>
      <AutoComplete />
      <Dropdown/>
      <ObTmpAuto/>
      <FormComponent/>
      <Casecade /> */}
      {/* <DataTableWithSortingFiltering/> */}
      {/* <Barchart/>
      <Doughnutchart/>
      <Linechart/> */}
      {/* <Toasty/>
      <Split/> */}
      {/* <div className='flex justify-center items-center'>
         <BasicDemo/>
      </div> */}
      <div className='flex flex-col'>
        <FormProvider>
           <Addmulti/>
        </FormProvider>
      </div>
      
      
      </div>
    </>
  )
}

export default App
