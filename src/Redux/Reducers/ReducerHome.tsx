const initialState:any ={
    count:0
}

export const ecommerce = (state:any=initialState,action:any)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
             count:state.count +action.payload
            }
            
            
    
        default:
           return state
    }
}