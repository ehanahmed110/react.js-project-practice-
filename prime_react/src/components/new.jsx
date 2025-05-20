import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { useState } from 'react'

export function New() {
    const [visible,setVisible] = useState(false);

    return (
        <>
        <div className='container mx-auto'>
            <h1>Prime React</h1>
             <Button label="Click Me" icon="pi pi-check" /> <br />
             <InputText placeholder='Enter Your name' /> <br />
             <Checkbox inputId="cb1" checked={true}/> <br />
             <br />
             <DataTable>
                <Column field='name' header='Name' />
                 <Column field='email' header='Email' />
                  <Column field='age' header='Age' />
                   <Column field='class' header='Class' />
             </DataTable><br />
             <br />
             <h1>Dialog</h1>
             <Button label='Show Dialog' onClick={()=>setVisible(true)} />
             <Dialog header='My Dialog' visible={visible} onHide={()=>setVisible(false)}>
                <form action="">
                        <InputText placeholder='Enter Your name' /> <br />
                        <InputText placeholder='Enter your class' /> <br />
                        <Button label='submit' type='submit' onClick={()=>console.log("value submit")}/>
                </form>
             </Dialog>
       </div>

        </>
    )
}
