import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { message } from 'antd';


export function* register (action:any){
        const {username, password,email} = action.payload;
        const temp ={
            username: username,
            email: email,
            password: password
        }
        try {
            const response: AxiosResponse<any> = yield call(
                axios.post,
                'http://192.168.1.69:8000/auth/register',
                temp
              );
              console.log("response",response.data.data);
              console.log(typeof(response.status))
            //   console.log(response.data.message)
              if(response) {
                  toast.success("user registered successfully")
              }
              else{
                console.log("message")
                // toast.error(response.message)
              }
        } catch (error:any) {
            console.log("error", error.response.data.message)
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
          if(response){
            toast.success("user logged in  successfully")
            // console.log('token', response.data.data.token)
            localStorage.setItem('token', response.data.data.token);
          }
    } catch (error:any) {
        
    }
}

export function* googlelogin (action:any){
  try {
    const response: AxiosResponse<any> = yield call(
      axios.get,
      'http://192.168.1.69:8000/auth/google',
    );   
    // console.log("google", response)
  } catch (error) {
    
  }
}


export function* getAllProducts(){
  try {
    const response: AxiosResponse<any>= yield call(
      axios.get,
      'http://192.168.1.69:8000/products/all'
     )  
      yield put({type: 'SET_ALL_PRODUCTS',payload:response.data})

     console.log("all products", response.data);
     
  } catch (error) {
    
  }
}
export function* getSingleProduct(action:any){
  const id=action.payload
  try {
    const response: AxiosResponse<any>= yield call(
      axios.get,
      `http://192.168.1.69:8000/products/${id}`
     )  
      // yield put({type: 'SET_ALL_PRODUCTS',payload:response.data})

     console.log("single products", response.data);
     
  } catch (error) {
    
  }
}

export function* addProduct(action:any){
  try {
      const d=action.payload;
      const product_name=d.title;
      const price=d.price;
      const quantity=d.quantity;
      const category=d.category;
      const description=d.description;
      const temp={
        product_name,
        price,
        quantity,
        category,
        description
      }
      const response: AxiosResponse<any>= yield call(
        axios.post,
        'http://192.168.1.69:8000/products/add_product',
        temp
       )  
       if(response){
        toast.success("product added successfully")
        yield call(getAllProducts)
       }
      console.log("add product",response.data)
  } catch (error) {
    
  }
}

export function* deleteProduct(action:any){
  const id = action.payload
  try {
    const response :AxiosResponse<any> = yield call(
      axios.delete,
      `http://192.168.1.69:8000/products/delete_product/${id}`
    )

    if(response){
      yield call(getAllProducts)
    }

  } catch (error) {
    
  }
}






export  function* watcher(){
        yield takeLatest("REGISTER",register)
        yield takeLatest("LOGIN",login)
        yield takeLatest("GOOGLE_LOGIN",googlelogin)

        yield takeLatest("GET_ALL_PRODUCTS",getAllProducts)
        yield takeLatest("GET_SINGLE_PRODUCT",getSingleProduct)
        yield takeLatest("ADD_PRODUCT",addProduct)
        yield takeLatest("DELETE_PRODUCT",deleteProduct)


} 