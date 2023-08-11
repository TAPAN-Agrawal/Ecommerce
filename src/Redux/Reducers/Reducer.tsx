const initialState: any = {
  products: [],
  singleProduct: [],
  searchResults: [],
  users: [],
  cartItems: [],
  login:false
};

export const ecommerce = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_REDUCER":
      return {
        ...state,
        login: true
      };
      case 'LOGOUT_REDUCER':
        return{
          ...state,
          login: false
        }

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
    case "ADD_PRODUCT_REDUCER":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT_REDUCER":
      const id = action.payload.id;
      const updatedProduct = state.products.map((product: any) =>
        product.id === id ? { ...product, ...action.payload } : product
      );
      return {
        ...state,
        products: updatedProduct,
      };

    case "DELETE_PRODUCT_REDUCER":
      const updatedProducts = state.products.filter((record: any) => {
        return record.id !== action.payload;
      });
      return {
        ...state,
        products: updatedProducts,
      };

    case "CLEAN_PRODUCT":
      return {
        ...state,
        singleProduct: [],
      };
    case "CLEAN_ALL_PRODUCT":
      return {
        ...state,
        products: [],
      };
    case "SEARCH_PRODUCT_REDUCER":
      return {
        ...state,
        searchResults: action.payload,
      };
      case 'CLEAR_SEARCH_PRODUCT_REDUCER':
        return{
          ...state,
          searchResults: [],
        }

    case "ADD_USER_REDUCER":
      return {
        ...state,
        users: action.payload,
      };

    case "DELETE_USER_REDUCER":
      let updatedUsers = state.users.filter((x: any) => {
        return x.id !== action.payload;
      });
      return {
        ...state,
        users: updatedUsers,
      };

    case "SET_PRODUCTS_CART_REDUCER":
     
    const updatedCart = action.payload.map((item: any) => {
      return{
        
        id: item.id,
        description: item.products.description,
        price: item.products.price,
        product_img: item.products.product_img,
        product_name: item.products.product_name,
        quantity: item.quantity,
        totalQuantity:item.products.quantity

      }
    }
    )
    // console.log('object',updatedCart);
      return {
          ...state,
          cartItems: updatedCart
      };

      case 'DELETE_CART_ITEM_REDUCER':
        let updatedCarts = state.cartItems.filter((item: any) => {
          return item.id !== action.payload
        })
        return{
          ...state,
          cartItems: updatedCarts
        }

    default:
      return state;
  }
};
