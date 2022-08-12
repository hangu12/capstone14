const now = () => {
  let d = new Date();  
  return format(d);
}

const format = (d) => {
  if (typeof d === 'string' || d instanceof String){
    d = new Date(d);  
  }

  let options = {  
    year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
  };
  return d.toLocaleTimeString("en-us", options);
}

const elipsised = (str, limit) => {
  if(!str){
    return '';
  }

  if (str.length <= limit){
    return str;
  }

  return  `${str.substring(0, limit)}...`;
}

const delimiter = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const Utils = {
  now: now,
  format: format,
  elipsised: elipsised,
  delimiter: delimiter
}

export default Utils;