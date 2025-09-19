export  const email ='Email';
export  const password ='Password';
export const isLoggedIn='IsLoggedIn';
export const E_mail=(payload)=> ({type:email,payload});
export const pass_word =(payload)=>({type:password,payload});
export const loggedin =(payload)=>({type:isLoggedIn,payload})
