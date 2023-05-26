import { Modal } from "@mui/material";
import React, { useState, useImperativeHandle, forwardRef } from "react";
import db from "../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const PaymentModal = (props, ref) => {
  const [open, setOpen] = useState(false);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useImperativeHandle(ref,()=>({
    handleOpen: () => setOpen(true)
  }))
  const addData = ()=>{
    addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }
  return (
    <div>
      <Modal open={open} onClose={handleClose} className="flex flex-col items-center justify-center">
        <div className="w-[90%] bg-white">
            <button onClick={addData}>Click</button>
        </div>
      </Modal>
    </div>
  );
};

export default forwardRef(PaymentModal);
