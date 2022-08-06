const now = () => {
  let d = new Date();  
  let options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit"  
  };
  return d.toLocaleTimeString("en-us", options)
}

const Utils = {
  now: now
}

export default Utils;