/*
  Just use session Store at the moment. 
  If we have issues, then implement expires at or something.
  https://stackoverflow.com/questions/15171711/expiration-of-localStorage
*/

const STORAGE_KEY = "joongo";

const loginRequired = () => {
  if (getUser()){
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    afterSignInPath: window.location.href
  }));
  window.location.href = '/user/sign_in';
}

const getUser = () => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));  
    if (data && data.user){
      return data.user;
    } 
  }catch {
  }

  return null;
}

const getAfterSignInPath = () => {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));  
    if (data && data.afterSignInPath){
      return data.afterSignInPath;
    } 
  }catch {
  }

  return null;
}

const loggedInAs = (user) => {
  const path = getAfterSignInPath();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    user: user
  }));
  
  if (!user || !user._id){
    return;
  }

  if (path){
    window.location.href = path;
  }else{
    window.location.href = '/'
  }
}

const signOut = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.href = '/';
}

const LoginCtl = {
  loginRequired: loginRequired, 
  getUser: getUser,
  loggedInAs: loggedInAs,
  signOut: signOut
}

export default LoginCtl;