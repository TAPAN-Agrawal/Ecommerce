export interface Value {

}



export const register = (data:any)=>{
        return {
            type: 'REGISTER',
            payload:data
        }
}

export const login =(data:any)=>{
    return{
        type: 'LOGIN',
        payload:data
    }
}

export const googlelogin=()=>{
    return{
        type: 'GOOGLE_LOGIN',
    }
}

export const getAllProducts = ()=>{
    return{
        type:'GET_ALL_PRODUCTS',
    }
}

export const getSingleProduct = (id:any)=>{
    return{
        type:'GET_SINGLE_PRODUCT',
        payload:id
    }
}

export const addProduct = (data:any)=>{
    return{
        type:'ADD_PRODUCT',
        payload:data
    }
}

export const deleteProduct = (data:any)=>{
    return{
        type: 'DELETE_PRODUCT',
        payload:data
    }
}


