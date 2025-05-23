import axios from "axios";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

export function New() {
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    };
    GetData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1>Prime React</h1>
        {/* <Button label="Click Me" icon="pi pi-check" /> <br />
             <InputText placeholder='Enter Your name' /> <br />
             <Checkbox inputId="cb1" checked={true}/> <br />
             <br /> */}
       
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText 
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search" />
        </IconField>
        <DataTable
          value={users}
          paginator
          rows={5}
          header="User List"
          globalFilter={globalFilter}
          className="p-datatable-gridlines"
        >
          <Column
            field="id"
            header="#"
            sortable
            filter
            filterPlaceholder="search by ID"
          />
          <Column
            field="firstName"
            header="Name"
            sortable
            filter
            filterPlaceholder="search by name"
          />
          <Column
            field="email"
            header="Email"
            sortable
            filter
            filterPlaceholder="search by email"
          />
          <Column
            field="age"
            header="Age"
            sortable
            filter
            filterPlaceholder="search by Age"
          />
          <Column
            field="phone"
            header="Contact"
            sortable
            filter
            filterPlaceholder="search by Contact"
          />
          <Column
            field="gender"
            header="Gender"
            sortable
            filter
            filterPlaceholder="search by Gender"
          />
        </DataTable>
        <br />
        <br />
        <h1>Dialog</h1>
        <Button label="Show Dialog" onClick={() => setVisible(true)} />
        <Dialog
          header="My Dialog"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <form action="">
            <InputText placeholder="Enter Your name" /> <br />
            <InputText placeholder="Enter your class" /> <br />
            <Button
              label="submit"
              type="submit"
              onClick={() => console.log("value submit")}
            />
          </form>
        </Dialog>
      </div>
    </>
  );
}

// components/DataTableWithSortingFiltering.jsx
// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';

// const dummyUsers = [
//   { id: 1, name: 'Ali Khan', email: 'ali@example.com', age: 28 },
//   { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', age: 34 },
//   { id: 3, name: 'John Doe', email: 'john@example.com', age: 22 },
//   { id: 4, name: 'Maria Sheikh', email: 'maria@example.com', age: 29 },
// ];

// const DataTableWithSortingFiltering = () => {
//   const [users, setUsers] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState('');

//   useEffect(() => {
//     setUsers(dummyUsers); // simulate API data
//   }, []);

//   return (
//     <div className="card p-4">
//       <h2 className="text-lg mb-4">User Table (Sorting + Filtering)</h2>

//       <span className="p-input-icon-left mb-3">
//         <i className="pi pi-search" />
//         <InputText
//           type="search"
//           placeholder="Global Search"
//           onInput={(e) => setGlobalFilter(e.target.value)}
//         />
//       </span>

//       <DataTable
//         value={users}
//         paginator
//         rows={5}
//         globalFilter={globalFilter}
//         header="User List"
//         className="p-datatable-gridlines"
//       >
//         <Column field="id" header="ID" sortable />
//         <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
//         <Column field="email" header="Email" sortable filter filterPlaceholder="Search by email" />
//         <Column field="age" header="Age" sortable filter filterPlaceholder="Search by age" />
//       </DataTable>
//     </div>
//   );
// };

// export default DataTableWithSortingFiltering;
