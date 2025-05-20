import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext'
import React from 'react'
import { useState } from 'react'

export function Form() {
    const [text,setText] = useState('');
    const [visible,setVisible] = useState(false)
    return (
        <>
           
                <div className="p-d-flex p-jc-center p-ai-center" onSubmit={(e)=>e.preventDefault()}>
                    <form action="">
                        <InputText placeholder='Name'
                        value={text} 
                        onChange={(e)=>setText(e.target.value)}
                        />
                        <Button label='show Name' className='p-ml-2' 
                        onClick={()=>setVisible(true)}
                        />
                        
                    </form>
                    <Dialog header='Welcome' visible={visible} onHide={()=>setVisible(false)}>
                         {`Hello ${text}`}
                    </Dialog>
                </div>
            
        </>
    )
}
