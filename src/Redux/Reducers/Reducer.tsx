const initialState: any = {
  products: [],
  singleProduct: [],
  searchResults: [],
  users: [],
  cartItems: [],
  totalCount: "",
  login: false,
  purchased: false,
  profileDetails:'',
 
};

export const ecommerce = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_REDUCER":
      return {
        ...state,
        login: true,
       
      };
    case "LOGOUT_REDUCER":
      return {
        ...state,
        login: false,
        register: false,
        profileDetails:''
      };
   

    case "SET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
        totalCount: action.payload.count,
      };

    case "SET_SINGLE_PRODUCTS":
      return {
        ...state,
        singleProduct: {
          ...action.payload.product,
          quantityInCart: action.payload.quantityInCart
        }
      };
    case "ADD_PRODUCT_REDUCER":
      return {
        ...state,
        products: [...state.products, action.payload.data.savedProduct],
      };
    case "UPDATE_PRODUCT_REDUCER":
      const id = action.payload.data.updatedProduct.id;
      const updatedProductList = state.products.map((product: any) => {
        if (id === product.id) {
          return action.payload.data.updatedProduct;
        }
        return product;
      });
      

      return {
        ...state,
        products: updatedProductList,
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
        searchResults: action.payload.data,
        totalCount: action.payload.totalCount,
      };
    case "CLEAR_SEARCH_PRODUCT_REDUCER":
      return {
        ...state,
        searchResults: [],
      };

    case "ADD_USER_REDUCER":
      return {
        ...state,
        users: action.payload.users,
        totalCount: action.payload.totalCount,
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
        return {
          id: item.id,
          description: item.products.description,
          price: item.products.price,
          product_img: item.products.product_img,
          product_name: item.products.product_name,
          quantity: item.quantity,
          totalQuantity: item.products.quantity,
        };
      });
      return {
        ...state,
        cartItems: updatedCart,
      };

    case "DELETE_CART_ITEM_REDUCER":
      let updatedCarts = state.cartItems.filter((item: any) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        cartItems: updatedCarts,
        singleProduct:[]
      };

    case "UPDATE_QUANTITY_CART":
      let ids = action.payload.id;
      let qty = action.payload.quantity;
     
      
      let updatedCartItems = state.cartItems.map((item: any) => {
        if (item.id === ids) {
          return {
            ...item,
            quantity: qty,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case "COMPLETE_PURCHASE_SUCCESS":
      return {
        ...state,
        purchased: true,
      };
    case "PURCHASE_REMOVER":
      return {
        ...state,
        purchased: false,
      };

      case 'SET_PROFILE_DETAILS_REDUCER':
        return{
          ...state,
          profileDetails:action.payload
        }

        case 'CLEAN_PROFILE_DETAILS':
          return{
            ...state,
            profileDetails:''
          }

    default:
      return state;
  }
};
