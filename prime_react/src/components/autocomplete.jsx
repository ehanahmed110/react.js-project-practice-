import { AutoComplete } from 'primereact/autocomplete'
import { Button } from 'primereact/button'
import React from 'react'
import { useState } from 'react'

export function Autocomplete() {
    const[value,setValue] = useState('');
    const [items,setItems] = useState([]);

    const search = (e) => {
        const allItems = ["Ehan","Ahmed","Ali","Raza","hassan"];
        const filtered = allItems.filter((item)=>
            item.toLocaleLowerCase().includes(e.query.toLocaleLowerCase())
        );
        setItems(filtered)
    }

    return (
        <>
        <div>
            <h1>autocomplete</h1>
             <AutoComplete value={value} 
             suggestions={items} 
             completeMethod={search} 
             onChange={(e) => setValue(e.value)}  
             dropdown
             placeholder='write....'
             />
           
        </div>
        
        </>
    )
}
