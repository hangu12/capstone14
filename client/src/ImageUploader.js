import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

export const ImageUploader = (props) => {
  const [dragged, setDragged] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragged(true);
  }
  const onDragLeave = (e) => {
    e.preventDefault();
    setDragged(false);
  }
  const onDrop = (e) => {
    e.preventDefault();
    setDragged(false);
    let dt = e.dataTransfer;
    handleFiles(dt.files);
  }
  const draggedClass = () => dragged ? 'dragged': '';

  const handleFiles = (files) => {
    const handlers = ([...files]).map(file => {
      return new Promise((resolve) => {
        handleFile(file, resolve);
      });
    })

    Promise.all(handlers).then((resolves) => {
      const images = resolves.map(r => r.src)
      const imageFiles = resolves.map(r => r.file)
      props.setImages(([...props.images, ...images]))
      props.setImageFiles(([...props.imageFiles, ...imageFiles]))
    });
  }
  const handleFile = (file, resolve) => {
    const reader = new FileReader();
    reader.onload = function(){
      const src = reader.result;
      resolve({ src, file });
    }
    reader.readAsDataURL(file);
  }
  const removeImage = (idx) => {
    props.setImages(props.images.filter((o, i) => idx != i));
    props.setImageFiles(props.imageFiles.filter((o, i) => idx != i));
  }

  return (
    <div className="img-uploader">
      <div 
        className={`drop-zone ${draggedClass()}`}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        >
        <div className="upload-icon fl fc">
          <FontAwesomeIcon icon={faCloudUploadAlt} />
          <div className="text">
            Drop image here
          </div>
        </div>
      </div>
      <div className="fl fs gap img-controls">
        {
          props.images.map((image, idx) => (
            <div key={idx} className="img-control">
              <div className="img-wrap">
                <img src={image} alt="" className="square" />
                <button className="" onClick={ e => { removeImage(idx) } }>
                  X 
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>   
  );
}

export default ImageUploader;
