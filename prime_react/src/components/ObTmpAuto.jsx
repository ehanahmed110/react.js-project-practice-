import React from 'react'
import { AutoComplete } from "primereact/autocomplete";
import { useState } from 'react';

export function ObTmpAuto() {
 const [selectedCountry,setSelectedCountry] = useState(null);   
 const [filteredCountries,setFilteredCountries] = useState([]);
 const countries = [
    { name: 'India', code: 'IN' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'USA', code: 'US' },
    { name: 'Germany', code: 'DE' },
    { name: 'Australia', code: 'AU' }
 ];
 
 const search = (e) => {
    let query = e.query.toLowerCase();
    let filtered = countries.filter((countery)=>
    countery.name.toLocaleLowerCase().startsWith(query)
    );
    setFilteredCountries(filtered);
 };

 const itemTemplate = (item) =>{
   return(
    <div>
        <i className="pi pi-flag" style={{ marginRight: '10px' }}></i>
        {item.name} ({item.code})
    </div>
   )
 }
 const  panelFooterTemplate = () =>{
  return(
    <div>
         <span style={{ padding: '10px' }}>Total: {filteredCountries.length} countries</span>
    </div>
  )
 }

    return (
        <>
          <AutoComplete field="name" 
          value={selectedCountry} 
          suggestions={filteredCountries}  
          completeMethod={search} 
          onChange={(e) => setSelectedCountry(e.value)} 
          itemTemplate={itemTemplate} 
          panelFooterTemplate={panelFooterTemplate} 
          dropdown
           placeholder="Search a country"
          />
           
        </>
    )
}
