import React, { useState, useEffect } from 'react';
import ItemForm from "./ItemForm";
import { API_BASE } from "./conf";

export const ItemNew = (props) => {

  const item = {
    name: '',
    description: '',
    price: '',
    images: [],
    available: true
  }

  const handleSubmit = (formData) => {
    const url = `${API_BASE}/product`;
     
    fetch(url, {
      method: 'POST', 
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      if (data.error){
        alert(data.error.message);
        window.location.href = `/items/new`;
        return;
      }
      window.location.href = `/items/${data._id}`;
    });
 
  }

  return (
    <div className="wrapper">
      <main>
        <h1>Post New Item</h1>
        <div className="item new">
          <ItemForm 
            {...item}
            handleSubmit={ handleSubmit }
          />
        </div>
      </main>
    </div>

  );
}

export default ItemNew;
