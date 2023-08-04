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

export const getAllProducts = (page:any,limit:any)=>{
    return{
        type:'GET_ALL_PRODUCTS',
        payload:{page,limit}
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

export const updateProduct =(data:any)=>{
    return {
        type:'UPDATE_PRODUCT',
        payload:data
    }
}

export const deleteProduct = (data:any)=>{
    return{
        type: 'DELETE_PRODUCT',
        payload:data
    }
}
export const cleanAllProduct =()=>{
    return{
        type: 'CLEAN_ALL_PRODUCT',
    }
}

export const cleanSingleProduct = ()=>{
    return{
        type: 'CLEAN_PRODUCT',
        
    }
}

export const searchProduct = (search:any,page:any,limit:any)=>{
    return{
        type: 'SEARCH_PRODUCT',
        payload:{search,page,limit}
    }
}

export const addAdmin=(data:any)=>{
    return{
        type: 'ADD_ADMIN',
        payload:data
    }
}



