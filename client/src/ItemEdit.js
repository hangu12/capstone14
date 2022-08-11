import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import ItemForm from "./ItemForm";
import API from "./api";
import LoginCtl from "./login_ctl";
import { API_BASE } from "./conf";

export const ItemEdit = (props) => {
  LoginCtl.loginRequired();

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const user = LoginCtl.getUser();
    if (user){
      let url = `${API_BASE}/product/${id}`;
      // if (user){
      //   url = url + `?user_id=${user._id}`  // To get wished
      // }

      API.get(url)
      .then((data) => {
        setItem({
          _id: data._id,
          name: data.name,
          price: data.price,
          images: data.images.map(i => i.src),
          description: data.description,
          seller: data.seller,
          available: data.available,
          wish: data.wished
        })
      });
    }

    return () => {
    }
  }, [])

  const handleSubmit = (formData) => {
    const url = `${API_BASE}/product/${id}`;
    // Currently, only below fields can be modified.
    API.put(url, {
      name: formData.get('name'),
      category: formData.get('category'),
      price: formData.get('price'),
      description: formData.get('description')
    })
    .then((data) => {
      window.location.href = `/items/${data._id}`;
    })
 
  }

  
  return (
    <div className="item edit">
      <h1>Edit Item</h1>
      {
        item && <ItemForm 
          {...item}
          handleSubmit={ handleSubmit }
        />
      }
    </div>
  );
}

export default ItemEdit;
