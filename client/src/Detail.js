import React, { useState, useEffect } from 'react';

export const Detail = (props) => {
  console.log("Detail rendering");
  const [data, setData] = useState(null);
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log("Detail mounted");
  
    return () => {
      console.log("Detail unmounted");
    }
  }, [])

  return (
    <>
      <header>
        <h1>Header, Nav, ..Detail Page </h1>
      </header>
      <div className="wrapper">
        <main className="rsp-wrap">
          <div className="box">
            <div className="img-wrap">
              <div className="availability">
                <p>Available</p>
              </div>
              <img src="https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9" />
            </div> 
          </div>
          <div className="box">
            <div className="pd">
              <h1>Soft Landing plush swan rocker</h1>
            </div>    
            <div className="pd-rl desc">
              <p>Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction.</p>
            </div>
            <div className="pd seller"><a href="#">John Doe</a></div>    
            <div className="fl pd control">
              <div className="price">$25</div>
              <div className="buttons">
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              {
                /*
                div>
                <button>
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
                */
              }
            </div>    
          </div>
        </main>
      </div>   
    </>
  );
}

export default Detail;
