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


const Utils = {
  now: now,
  format: format
}

export default Utils;