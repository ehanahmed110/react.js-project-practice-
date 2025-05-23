import { Button } from "primereact/button";
import React, { useRef } from "react";
import { Toast } from "primereact/toast";

export function Toasty() {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "error",
      summary: "error",
      detail: "your data saved successfully",
      life: 3000,
      position: "top-left",
    });
  };

  return (
    <>
      <div className="card">
        <Toast ref={toast} />
        <Button onClick={show} label="Basic" />
      </div>
    </>
  );
}
