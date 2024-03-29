import axios from "axios";
import { getToken } from "../Auth";
export const BASE_URL='http://localhost:8184/api';

export const myAxios= axios.create({
    baseURL:BASE_URL
    // using the myAxios variable we will be able to call the server
})
export const privateAxios = axios.create({
    baseURL: BASE_URL,
  });
  
  privateAxios.interceptors.request.use(
    (config) => {
      const token = getToken();
  
      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`;
        // console.log(config);
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );

// export const privateAxios=axios.create({
//     baseURL:BASE_URL
// })

// privateAxios.interceptors.request.use(config=>{
//     const token=getToken()
//     if(token){
//         config.headers.common.Authorization = `Bearer ${token}`
//         console.log(config)
        
//     }
//     return config;

// }, (error)=>Promise.reject(error))