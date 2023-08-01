import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";


export function* register (action:any){
        const {username, password,email} = action.payload;
        const temp ={
            username: username,
            email: email,
            password: password
        }
        console.log("first",temp);
        try {
            const response: AxiosResponse<any> = yield call(
                axios.post,
                'http://192.168.1.69:8000/auth/register',
                temp
              );
              console.log("response",response);
              toast.success("user registered successfully")
        } catch (error) {
            
        }
        
}

export function* login (action:any){
    const temp=action.payload;
    console.log("first",temp);
    try {
        const response: AxiosResponse<any> = yield call(
            axios.post,
            'http://192.168.1.69:8000/auth/login',
            temp
          );    
          console.log("response",response);
        //   toast.success("user logged in successfully")
    } catch (error) {
        
    }
}


export function* setProduct (){
    try {
           const response: AxiosResponse<any>= yield call(
            axios.get,
            'https://cuddly-showers-double.loca.lt/products/all'
           )  
    } catch (error) {
        
    }
}



export  function* watcher(){
        yield takeLatest("REGISTER",register)
        yield takeLatest("LOGIN",login)

        yield takeLatest("SET_PRODUCTS",setProduct)
} 