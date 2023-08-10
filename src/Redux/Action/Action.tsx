



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
export const loginSetter =()=>{
    return{
        type:'LOGIN_REDUCER'
    }
}
export const logoutSetter=()=>{
    return{
        type:'LOGOUT_REDUCER'
    }
}

export const googlelogin=()=>{
    return{
        type: 'GOOGLE_LOGIN',
    }
}

export const getAllProducts = (page:any,limit:any,category:any,sort:any)=>{
    return{
        type:'GET_ALL_PRODUCTS',
        payload:{page,limit,category,sort}
    }
}

export const getSingleProduct = (id:number)=>{
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

export const deleteProduct = (data:number)=>{
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

export const getAllUsers = (page:number,limit:number)=>{
    return{
        type:'GET_ALL_USERS',
        payload:{page,limit}
    }
}

export const addToCart = (data:any)=>{
    return{
        type:'ADD_TO_CART',
        payload:data
    }
}

export const getProductsInCart = () =>{
    return{
        type:'GET_PRODUCTS_IN_CART',
        
    }
}

export const deleteUser=(data:number)=>{
    return{
        type:'DELETE_USER',
        payload:data
    }
}

export const deleteCartItems=(id:any)=>{
    return{
        type:'DELETE_CART_ITEMS',
        payload:id
    }
}


