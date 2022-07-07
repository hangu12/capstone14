import { useState, useEffect } from 'react';

const Hello = (props) => {
  console.log("Hello rendering");
  const [data, setData] = useState(null);
  const [names, setNames] = useState([]);

  useEffect(() => {
    
    const url = 'https://api.gbif.org/v1/species/suggest?q=tiger';
    console.log("useEffect in Hello. url is ", url);
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetcheddata is ", data);

        setNames(data.map(d => d.scientificName));
      });

  
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  
  }, [])

  return (
    <div className="hello">
      This is hello. Hello {props.name} 
      <div>
        <p>{!data ? "Loading..." : data}</p>
        <p>ap result</p>
        <div>{names}</div>
      </div>
    </div>
  );
}

export default Hello;
