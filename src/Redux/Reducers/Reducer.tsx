const initialState:any ={
    count:0,
    products:[]
}

export const ecommerce = (state:any=initialState,action:any)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
             count:state.count +action.payload
            }

            case 'SET_ALL_PRODUCTS':
                return{
                        ...state,
                        products:action.payload
                }
            
            
    
        default:
           return state
    }
}