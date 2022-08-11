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
      if (data.error){
        return;
      }
      window.location.href = `/items/${data._id}`;
    });
 
  }

  return (
    <div className="item new">
      <h1>New Item</h1>
      <ItemForm 
        {...item}
        handleSubmit={ handleSubmit }
      />
    </div>
  );
}

export default ItemNew;
