import React, { useState, useEffect } from 'react';
import ItemForm from "./ItemForm";

export const ItemNew = (props) => {

  const item = {
    name: '',
    description: '',
    price: '',
    images: [],
    available: true
  }

  return (
    <div className="item new">
      <h1>New Item</h1>
      <ItemForm 
        {...item}
      />
    </div>
  );
}

export default ItemNew;
