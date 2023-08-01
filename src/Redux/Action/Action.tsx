export interface Value {

}

export const increment = (n:any) =>{
   return{

       type: 'INCREMENT',
       payload:n
   } 
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

export const setProducts = ()=>{
    return{
        type: 'SET_PRODUCTS',
    }
}