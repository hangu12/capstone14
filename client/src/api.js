import LoginCtl from "./login_ctl";

const headers = () => {
  let token = '';
  const user = LoginCtl.getUser();
  if (user){
    token = user.accessToken;
  }
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
};

const get = (url, data) => {
  return new Promise(function(resolve, reject) {
    fetch(url, {
      method: 'GET',
      headers: headers()
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        console.error("not 200 error", data.error);
        return;
      }
      resolve(data);
      
    }).catch((error) => {
      console.error("catch error", error);
    });
  });
}
const post = (url, data) => {
  return new Promise(function(resolve, reject) {
    fetch(url, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data), 
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        console.error("not 200 error", data.error);
        return;
      }
      resolve(data);
      
    }).catch((error) => {
      console.error("catch error", error);
    });
  });
}
const put = (url, data) => {
  return new Promise(function(resolve, reject) {
    fetch(url, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(data), 
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        console.error("not 200 error", data.error);
        return;
      }
      resolve(data);
      
    }).catch((error) => {
      console.error("catch error", error);
    });
  });
}
const remove = (url, data) => {
  return new Promise(function(resolve, reject) {
    fetch(url, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify(data), 
    })
    .then((res) => {
      if (res.ok){
        resolve(res);
      }else {
        console.error("not ok error");
      }
      
    }).catch((error) => {
      console.error("catch error", error);
    });
  });
  
}

const API = {
  get: get,
  post: post,
  put: put,
  delete: remove
}

export default API;