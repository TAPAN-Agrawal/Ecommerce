import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store';
import axios,{ AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type RequestInterceptorSuccessCallback = (config: any) => any;

axios.interceptors.request.use(
  (config:any) =>
{ 
   console.log("here",config);
   return config
  }
)
axios.interceptors.response.use(
  (config:any) =>
{ 
   console.log("here 2",config);
 
   
   return config
  },
  (error:any)=>{
     toast.error(error.response.data.message)

  }
)


root.render(
  <Provider store={store}>

  <BrowserRouter>
  
  <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
