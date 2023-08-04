const initialState: any = {
  products: [],
  singleProduct: [],
  searchResults:[]
};

export const ecommerce = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "SET_ALL_PRODUCTS":
   

      return {
        ...state,
        products: action.payload,
      };

    case "SET_SINGLE_PRODUCTS":
      return {
        ...state,
        singleProduct: action.payload,
      };
      case 'ADD_PRODUCT_REDUCER':
        return{
            ...state,
            products: [...state.products,action.payload]
        }
        case 'UPDATE_PRODUCT_REDUCER':
          const id = action.payload.id;
          const updatedProduct = state.products.map((product:any) =>
            product.id === id ? { ...product, ...action.payload } : product
          );
          return {
            ...state,
            products: updatedProduct,
          };

      case 'DELETE_PRODUCT_REDUCER':
        const updatedProducts = state.products.filter((record:any)=>{
           return record.id !== action.payload
        })
      return{
        ...state,
        products:updatedProducts,
      }

      case "CLEAN_PRODUCT":
        return{
            ...state,
            singleProduct:[]
        }
        case 'CLEAN_ALL_PRODUCT':
          return{
            ...state,
            products:[]
          }
        case 'SEARCH_PRODUCT_REDUCER':
          return{
                  ...state,
                  searchResults:[action.payload]
          }

    default:
      return state;
  }
};
