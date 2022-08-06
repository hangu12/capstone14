import React, { useState, useEffect } from 'react';
import ItemForm from "./ItemForm";

export const ItemEdit = (props) => {

  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log("Item mounted");
    const url = "https://usedproduct.herokuapp.com/api/product/62d8471c231c8aa8fb24b9c4";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetcheddata is ", data);

        setItem({
          _id: data._id,
          name: data.name,
          price: data.price,
          images: [
            "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216010698/658570596d14659e4949f55a1f32ddb9.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=df9683f92785a91c320eb80ceb7ae342",
            "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216011129/7d0eefdaa928bcb024dfcb769444109a.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9c2d3cc71c9261302b4a026dab44f35e",
            "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216011131/f31ee6c12b733988b2cb752bea42d236.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=65ca3f4e843361536ea19b28844cc551"
          ],
          // images: [data.image],
          description: data.description,
          seller: data.seller,
          available: data.available,
          wish: false
        })
      });

    return () => {
      console.log("Item unmounted");
    }
  }, [])
  
  return (
    <div className="item edit">
      <h1>Edit Item</h1>
      {
        item && <ItemForm 
          {...item}
        />
      }
    </div>
  );
}

export default ItemEdit;
