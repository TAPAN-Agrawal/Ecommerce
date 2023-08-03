const initialState:any ={
    products:[],
    singleProduct:[]

}

export const ecommerce = (state:any=initialState,action:any)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
             count:state.count +action.payload
            }

            case 'SET_ALL_PRODUCTS':
    //   const updatedProducts = action.payload.map((product: any) => ({
    //     ...product,
    //     product_img: product.product_img.replace('uploads/', ''),
    //   }));

      return {
        ...state,
        products: action.payload,
      };



             case 'SET_SINGLE_PRODUCTS':
                return{
                    ...state,
                    singleProduct:action.payload

                }   
            
            
    
        default:
           return state
    }
}