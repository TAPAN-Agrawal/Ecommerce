import { RegisterInterface } from "../../Components/Register/Register";
import { LoginInterface } from "../../Components/Login/Login";
import { AddProductInterface } from "../../Components/AddProduct/AddProduct";
import { CheckoutInterface } from "../../Components/Checkout/Checkout";

export const register = (data: RegisterInterface) => {
  return {
    type: "REGISTER",
    payload: data,
  };
};

export const login = (data: LoginInterface) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};
export const loginSetter = () => {
  return {
    type: "LOGIN_REDUCER",
  };
};
export const logoutSetter = () => {
  return {
    type: "LOGOUT_REDUCER",
  };
};

export const googlelogin = () => {
  return {
    type: "GOOGLE_LOGIN",
  };
};

export const getAllProducts = (
  page: number,
  limit: number,
  category: number | null,
  sort: string | null
) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: { page, limit, category, sort },
  };
};

export const getSingleProduct = (id: number) => {
  return {
    type: "GET_SINGLE_PRODUCT",
    payload: id,
  };
};

export const addProduct = (data: AddProductInterface) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};

export const updateProduct = (data: AddProductInterface) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: data,
  };
};

export const deleteProduct = (data: number) => {
  return {
    type: "DELETE_PRODUCT",
    payload: data,
  };
};
export const cleanAllProduct = () => {
  return {
    type: "CLEAN_ALL_PRODUCT",
  };
};

export const cleanSingleProduct = () => {
  return {
    type: "CLEAN_PRODUCT",
  };
};

export const searchProduct = (search: any, page: any, limit: any) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: { search, page, limit },
  };
};

export const addAdmin = (data: any) => {
  return {
    type: "ADD_ADMIN",
    payload: data,
  };
};

export const getAllUsers = (page: number, limit: number) => {
  return {
    type: "GET_ALL_USERS",
    payload: { page, limit },
  };
};

export const addToCart = (data: any) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const getProductsInCart = () => {
  return {
    type: "GET_PRODUCTS_IN_CART",
  };
};

export const deleteUser = (id: number) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const deleteCartItems = (id: number) => {
  return {
    type: "DELETE_CART_ITEMS",
    payload: id,
  };
};

export const updateQuantityCart = (data: any) => {
  return {
    type: "UPDATE_Quantity_CART",
    payload: data,
  };
};

export const completePurchase = (data: CheckoutInterface) => {
  return {
    type: "COMPLETE_PURCHASE",
    payload: data,
  };
};
