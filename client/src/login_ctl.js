/*
  Just use session Store at the moment. 
  If we have issues, then implement expires at or something.
  https://stackoverflow.com/questions/15171711/expiration-of-sessionstorage
*/

const SESSION_STORAGE_KEY = "joongo";


const loginRequired = () => {
  if (getUser()){
    return;
  }

  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
    afterSignInPath: window.location.href
  }));
  window.location.href = '/user/sign_in';
}

const getUser = () => {
  try {
    const data = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY));  
    if (data && data.user){
      return data.user;
    } 
  }catch {
  }

  return null;
}

const getAfterSignInPath = () => {
  try {
    const data = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY));  
    if (data && data.afterSignInPath){
      return data.afterSignInPath;
    } 
  }catch {
  }

  return null;
}

const loggedInAs = (user) => {
  const path = getAfterSignInPath();
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
    user: user
  }));
  
  if (path){
    window.location.href = path;
  }else{
    window.location.href = '/'
  }
}

const setUser = (user) => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, {
    user: user
  });
}

const LoginCtl = {
  loginRequired: loginRequired, 
  getUser: getUser,
  loggedInAs: loggedInAs
}

export default LoginCtl;