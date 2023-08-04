import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { message } from 'antd';
import { updateProduct } from "../Action/Action";
import axiosInstance from "../../Service/Service";



export function* register (action:any){
        const {username, password,email} = action.payload;
        const temp ={
            username: username,
            email: email,
            password: password
        }
        try {
            const response: AxiosResponse<any> = yield call(
              axiosInstance.post,
              '/auth/register',
              temp
               
              );
             
              if(response) {
                  toast.success("user registered successfully")
              }
              else{
                console.log("message")
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
            axiosInstance.post,
            '/auth/login',
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
      axiosInstance.get,
      '/auth/google',
    );   
    // console.log("google", response)
  } catch (error) {
    
  }
}


export function* getAllProducts(action:any){
  try {
    const {page,limit}=action.payload ;

    const response: AxiosResponse<any>= yield call(
      ()=> axiosInstance.get(`/products/all?page=${page}&limit=${limit}`)
    
     )  
      yield put({type: 'SET_ALL_PRODUCTS',payload:response.data})

     
  } catch (error) {
    
  }
}
export function* getSingleProduct(action:any){
  const id=action.payload
  try {
    const response: AxiosResponse<any>= yield call(
      axiosInstance.get,
      `/products/${id}`
     )  
      yield put({type: 'SET_SINGLE_PRODUCTS',payload:response.data})

    //  console.log("single products", response.data);
     
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
      const product_img=d.file
      const temp={
        product_name,
        price,
        quantity,
        category,
        description,
        product_img
      }
      const formData = new FormData();
formData.append("product_name", d.name);
formData.append("price", d.price);
formData.append("quantity", d.quantity);
formData.append("category", d.category);
formData.append("description", d.description);
formData.append("product_img", d.file);
console.log("file",d.file);

      const response: AxiosResponse<any>= yield call(
        axiosInstance.post,
        '/products/add_product',
        formData
       )  
       if(response){
        toast.success("product added successfully")
     yield put ({type:'ADD_PRODUCT_REDUCER',payload:response.data})    
       }
      console.log("add product",response.data)
  } catch (error) {
    toast.error("product not added successfully")
    
  }
}
export function* updateProducts(action:any){
  try {
    const d=action.payload;
    const id=d.id;
  

      const formData :any = new FormData();
      formData.append("product_name", d.name);
      formData.append("price",50);
      formData.append("quantity", "20");
      formData.append("category", d.category);
      formData.append("description", d.description);
      formData.append("product_img", d.file);
      const response: AxiosResponse<any>= yield call(
        axiosInstance.patch,
        `/products/update_product/${id}`,
        formData
       )  
       if(response){
        toast.success("product update successfully")
        yield put({type:'UPDATE_PRODUCT_REDUCER',payload:response.data})
      }
      console.log("add product",response.data)
  } catch (error) {
    toast.error("product not update ")
    
  }
}



export function* deleteProduct(action:any){
  const id = action.payload
  try {
    const response :AxiosResponse<any> = yield call(
      axiosInstance.delete,
      `/products/delete_product/${id}`
    )

    if(response){
      yield put({ type: 'DELETE_PRODUCT_REDUCER', payload:id});
    }

  } catch (error) {
    
  }
}


export function* searchProduct(action:any){
  const {search,page,limit}=action.payload;
  try {
    const response :AxiosResponse<any> = yield call(
      axiosInstance.get,
      `/products/search_text/?search=${search}&page=${page}&limit=${limit}`
    )
    if(response){
      yield put({ type: 'SEARCH_PRODUCT_REDUCER', payload:response.data});
    }
  } catch (error) {
    
  }
}


export function* addAdmin(action:any){
  const temp=action.payload
  try {
    const response :AxiosResponse<any> = yield call(
      axiosInstance.post,
      `/auth/add_admin`,
      temp
    )
    if(response){
      toast.success("admin added successfully")
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
        yield takeLatest("UPDATE_PRODUCT",updateProducts)
        yield takeLatest("DELETE_PRODUCT",deleteProduct)

        yield takeLatest('ADD_ADMIN',addAdmin)

        yield takeLatest('SEARCH_PRODUCT',searchProduct)


} 