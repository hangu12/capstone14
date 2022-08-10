import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import API from "./api";
import { API_BASE, CATEGORIES } from "./conf";
import ListItem from './ListItem'

export const Items = (props) => {
  const [items, setItems] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");
  if (!category){
    category = CATEGORIES[0].value;
  }

  useEffect(() => {
    let url = `${API_BASE}/product?category=${category}`;
    API.get(url)
    .then((data) => {
      setItems(data);
    });
  
    return () => {
    }
  }, [])

  const onCategoryChange = (e) => {
    window.location.href = `${window.location.pathname}?category=${e.target.value}`;
  }

  return (
    <div className="items">
      <div className="pd-tb">
        <select onChange={ onCategoryChange } value={category} className="categories">
          { 
            CATEGORIES.map((category, idx) => (
              <option  key={idx} value={category.value}>
                { category.label }
              </option>
            ))
          }
        </select>
      </div>
      <ul className="rsp-wrap">
      {
        items.map((item, idx) => (
          <ListItem 
            key={idx}
            {...item}
          />
        ))
      }
      </ul>
    </div>   
  );
}

export default Items;


    