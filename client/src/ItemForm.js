import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";

import ImageUploader from "./ImageUploader";
import TheSwiper from "./TheSwiper";
import ItemImage from "./ItemImage";
import LoginCtl from './login_ctl';
import { CATEGORIES } from './conf';

export const ItemForm = (props) => {
  LoginCtl.loginRequired();

  const [name, setName] = useState(props.name);
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);

  const [nameValidity, setNameValidity] = useState((props._id ? true : false));
  const [priceValidity, setPriceValidity] = useState((props._id ? true : false));

  const [images, setImages] = useState(props.images);
  const [imageFiles, setImageFiles] = useState([]);

  const submitForm = () => {
    let formData = new FormData();
    Array.from(imageFiles).forEach(imageFile => {
      formData.append('images', imageFile);
    });

    formData.append('seller', 'hangu')
    formData.append('name', name)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('available', true)
    formData.append('description', description)

    props.handleSubmit(formData);
  }
  const formValid = () => (
    nameValidity && priceValidity
  )
  
  const slideElements = () => {
    const slideImages = images.length > 0 ? images : ['https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930']
    return slideImages.map((img, idx) => (
      <div key={idx} className="img-wrap">
        <ItemImage 
          available={props.available}
          imgSrc={img}
        />
      </div>
    ))
  }


  const onNameChange = (e) => {
    console.log("name va", e.target.checkValidity());
    setNameValidity(e.target.checkValidity());
    setName(e.target.value);
  }
  const onCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const onPriceChange = (e) => {
    e.target.reportValidity()
    if (e.target.value){
      setPriceValidity(e.target.checkValidity());
    }else {
      setPriceValidity(false);
    }
    setPrice(e.target.value);
  }

  return (
    <div className="item-form">
        <div className="rsp-wrap">
          <div className="box">
            <TheSwiper 
              slideElements={ slideElements() }
            />
          </div>
        <div className="box">
          <div>
            <ImageUploader 
              images={ images }
              setImages={ setImages }
              imageFiles= { imageFiles }
              setImageFiles={ setImageFiles }
            />
          </div>
          <div className="form">
            <div className="field">
              <input
                type="text"
                className="form-control"
                required="required"
                aria-required="true"
                pattern=".+"
                value={ name }
                onChange={ onNameChange }
                placeholder={ "Name of Item" }
              />
            </div>
            <div className="field">
              <select onChange={ onCategoryChange } value={category} className="form-control">
                { 
                  CATEGORIES.map((category, idx) => (
                    <option  key={idx} value={category.value}>
                      { category.label }
                    </option>
                  ))
                }
              </select>
            </div>
            <div className="field">
              <textarea
                className="form-control"
                value={ description }
                onChange={ e => setDescription(e.target.value)}
                placeholder={ "Description of Item (Optional)" }
              />
            </div>
            <div className="pd-tb seller">{ props.seller }</div>    
            <div className="field fl fs gap">
              <div>
                $
              </div>
              <input
                type="number"
                min="1" 
                className="form-control sm"
                value={ price }
                onChange={ onPriceChange }
                placeholder={ "Price" }
              />
            </div>
            <div className="pd-tb">
            <input onClick={ submitForm } type="submit" name="submit" disabled={!formValid()} />
          </div>
          </div>
        </div>
      </div>
    </div>   
  );
}

export default ItemForm;
