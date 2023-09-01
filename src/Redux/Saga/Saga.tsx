import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { axiosInstance, axiosInstanceAuth } from "../../Service/Service";
import { RegisterInterface } from "../../Components/Register/Register";
import { LoginInterface } from "../../Components/Login/Login";
import { AddProductInterface } from "../../Components/Admin/AddProduct/AddProduct";
import {
  CheckoutInterface,
  buyNowInterface,
  completePurchaseInterface,
} from "../../Components/User/Checkout/Checkout";
import { AddAdmin } from "../../Components/Admin/AddAdmin/AddAdmin";
import { addToCartInterface } from "../../Components/User/Detail/Detail";
import { updateQuantityCartInterface } from "../../Components/User/CartCard/CartCard";

interface RegisterActionInterface {
  type: string;
  payload: RegisterInterface;
}

interface LoginActionInterface {
  type: string;
  payload: LoginInterface;
}

interface UserActionInterface {
  type: string;
  payload: { page: number; limit: number };
}

interface ActionNumberInterface {
  type: string;
  payload: number;
}

interface ActionProductInterface {
  type: string;
  payload: {
    page: number;
    limit: number;
    category: number;
    sort: string | null;
  };
}
interface ActionAddProductInterface {
  type: string;
  payload: AddProductInterface;
}

interface ActionCheckoutInterface {
  type: string;
  payload: CheckoutInterface;
}

interface ActionAddAdminInterface {
  type: string;
  payload: AddAdmin;
}
interface ActionAddToCartInterface {
  type: string;
  payload: addToCartInterface;
}

interface ActionupdateQuantityCartInterface {
  type: string;
  payload: updateQuantityCartInterface;
}

interface ActionCompletePurchaseInterface {
  type: string;
  payload: completePurchaseInterface;
}

interface ActionBuyNowInterface {
  type: string;
  payload: buyNowInterface;
}

export function* register(action: RegisterActionInterface) {
  const { username, password, email, dob, gender, address } = action.payload;

  const temp = {
    username: username,
    email: email,
    password: password,
    dob: dob,
    gender: gender,
    address: address,
  };
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.post,
      "/auth/register",
      temp
    );

    if (response) {
      yield put({ type: "REGISTER_REDUCER" });
    } else {
    }
  } catch (error: any) {}
}

export function* login(action: LoginActionInterface) {
  const temp = action.payload;

  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.post,
      "/auth/login",
      temp
    );
    if (response) {
      localStorage.setItem("token", response.data.data.tokenResponse.token);
      yield put({ type: "LOGIN_REDUCER" });
    }
  } catch (error: any) {}
}

export function* googlelogin(action: any) {
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.get,
      "/auth/google"
    );
  } catch (error) {}
}

export function* getAllProducts(action: ActionProductInterface) {
  try {
    let { page, limit, category, sort } = action.payload;
    const response: AxiosResponse<any> = yield call(() => {
      if (category === 0 || category === 1) {
        if (sort) {
          return axiosInstanceAuth.get(
            `/products/all?page=${page}&limit=${limit}&category=${category}&sortOrder=${sort}`
          );
        } else {
          return axiosInstanceAuth.get(
            `/products/all?page=${page}&limit=${limit}&category=${category}`
          );
        }
      } else {
        if (sort) {
          return axiosInstanceAuth.get(
            `/products/all?page=${page}&limit=${limit}&sortOrder=${sort}`
          );
        } else {
          return axiosInstanceAuth.get(
            `/products/all?page=${page}&limit=${limit}`
          );
        }
      }
    });

    if (response) {
      let temp = {
        products: response.data.products,
        count: response.data.totalCount,
      };
      yield put({ type: "SET_ALL_PRODUCTS", payload: temp });
    }
  } catch (error) {}
}
export function* getSingleProduct(action: ActionNumberInterface) {
  const id = action.payload;
  let userId = localStorage.getItem("userId");
  let url;
  if (userId) {
    url = `/products/product_by_id/?id=${id}&userId=${userId}`;
  } else {
    url = `/products/product_by_id/?id=${id}`;
  }
  try {
    const response: AxiosResponse<any> = yield call(axiosInstance.get, url);
    yield put({ type: "SET_SINGLE_PRODUCTS", payload: response.data });
  } catch (error) {
    yield put({ type: "SET_SINGLE_PRODUCTS_FAILED" });
  }
}

export function* addProduct(action: ActionAddProductInterface) {
  try {
    const d = action.payload;

    const formData = new FormData();
    formData.append("product_name", d.name);
    formData.append("price", d.price);
    formData.append("quantity", d.quantity);
    formData.append("category", d.category);
    formData.append("description", d.description);
    formData.append("product_img", d.file);

    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.post,
      "/products/add_product",
      formData
    );
  } catch (error) {}
}
export function* updateProducts(action: ActionAddProductInterface) {
  try {
    const d = action.payload;
    const id = d.id;

    const formData: any = new FormData();
    formData.append("product_name", d.name);
    formData.append("price", d.price);
    formData.append("quantity", d.quantity);
    formData.append("category", d.category);
    formData.append("description", d.description);
    if (d.file) {
      formData.append("product_img", d.file);
    }
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.patch,
      `/products/update_product/${id}`,
      formData
    );
    if (response) {
      yield put({ type: "UPDATE_PRODUCT_REDUCER", payload: response.data });
    }
  } catch (error) {}
}

export function* deleteProduct(action: ActionNumberInterface) {
  const id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.delete,
      `/products/delete_product/${id}`
    );

    if (response) {
      yield put({ type: "DELETE_PRODUCT_REDUCER", payload: id });
    }
  } catch (error: any) {}
}

export function* searchProduct(action: any) {
  const { search, page, limit } = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.get,
      `/products/search_text/?search=${search}&page=${page}&limit=${limit}`
    );
    if (response.status === 200) {
      yield put({
        type: "SEARCH_PRODUCT_REDUCER",
        payload: response.data,
      });
    } else {
    }
  } catch (error: any) {
    yield put({ type: "CLEAR_SEARCH_PRODUCT_REDUCER" });
  }
}

export function* addAdmin(action: ActionAddAdminInterface) {
  const temp = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.post,
      `/auth/add_admin`,
      temp
    );
  } catch (error) {}
}

export function* getAllUsers(action: UserActionInterface) {
  const { page, limit } = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.get,
      `/auth/users/?page=${page}&limit=${limit}`
    );
    if (response) {
      let temp = {
        users: response.data.data,
        totalCount: response.data.totalCount,
      };
      yield put({ type: "ADD_USER_REDUCER", payload: temp });
    }
  } catch (error) {}
}
export function* getAllAdmins(action: UserActionInterface) {
  const { page, limit } = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.get,
      `/auth/admins/?page=${page}&limit=${limit}`
    );
    if (response) {
      let temp = {
        users: response.data.data,
        totalCount: response.data.totalCount,
      };
      yield put({ type: "ADD_USER_REDUCER", payload: temp });
    }
  } catch (error) {}
}

export function* addToCart(action: ActionAddToCartInterface) {
  const id = action.payload.id;
  const quantity = action.payload.quantity;
  let temp = {
    quantity: quantity,
  };

  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.post,
      `/products/add_to_cart/${id}`,
      temp
    );
  } catch (error) {}
}

export function* getProductsInCarts() {
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.get,
      `/products/carts`
    );
    if (response) {
      yield put({
        type: "SET_PRODUCTS_CART_REDUCER",
        payload: response.data.data,
      });
    }
  } catch (error) {}
}

export function* deleteUser(action: ActionNumberInterface) {
  let id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.delete,
      `/auth/remove_user/${id}`
    );
    if (response) {
      yield put({ type: "DELETE_USER_REDUCER", payload: id });
    }
  } catch (error) {}
}

export function* deleteCartItem(action: ActionNumberInterface) {
  let id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.delete,
      `/products/remove_from_cart/${id}`
    );
    if (response) {
      yield put({ type: "DELETE_CART_ITEM_REDUCER", payload: id });
    }
  } catch (error) {}
}

export function* updateQuantityCart(action: ActionupdateQuantityCartInterface) {
  let id = action.payload.id;
  let temp = {
    quantity: action.payload.count,
  };

  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.patch,
      `/products/update_quantity/${id}`,
      temp
    );
    if (response) {
      let result = {
        id: action.payload.id,
        quantity: action.payload.count,
      };
      yield put({ type: "UPDATE_QUANTITY_CART", payload: result });
    }
  } catch (error) {}
}

export function* completePurchase(action: ActionCompletePurchaseInterface) {
  try {
    let temp = action.payload.values;
    let $isCalledFromCart = action.payload.isCalledFromCart;

    let url = `/products/shipping_details`;

    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.post,
      url,
      { ...temp, $isCalledFromCart }
    );

    if (response) {
      yield put({ type: "COMPLETE_PURCHASE_SUCCESS" });
    }
  } catch (error) {}
}
export function* buyNow(action: ActionBuyNowInterface) {
  try {
    let id = action.payload.id;
    let quantity = action.payload.quantity;
    let temp = {
      quantity: quantity,
    };

    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.patch,
      `/products/buy_now/${id}`,
      temp
    );
  } catch (error: any) {}
}

export function* getProfileDetails() {
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.get,
      `/auth/user`
    );

    if (response) {
      yield put({
        type: "SET_PROFILE_DETAILS_REDUCER",
        payload: response.data.data.customer,
      });
    }
  } catch (error) {}
}

export function* updateProfileDetails(action: any) {
  try {
    let temp = action.payload;

    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.patch,
      `/auth/update_user`,
      temp
    );
  } catch (error: any) {}
}

export function* watcher() {
  yield takeLatest("REGISTER", register);

  yield takeLatest("LOGIN", login);

  yield takeLatest("GOOGLE_LOGIN", googlelogin);

  yield takeLatest("GET_ALL_PRODUCTS", getAllProducts);

  yield takeLatest("GET_SINGLE_PRODUCT", getSingleProduct);

  yield takeLatest("ADD_PRODUCT", addProduct);

  yield takeLatest("UPDATE_PRODUCT", updateProducts);

  yield takeLatest("DELETE_PRODUCT", deleteProduct);

  yield takeLatest("ADD_ADMIN", addAdmin);

  yield takeLatest("SEARCH_PRODUCT", searchProduct);

  yield takeLatest("GET_ALL_USERS", getAllUsers);

  yield takeLatest("GET_ALL_ADMIN", getAllAdmins);

  yield takeLatest("ADD_TO_CART", addToCart);

  yield takeLatest("GET_PRODUCTS_IN_CART", getProductsInCarts);

  yield takeLatest("DELETE_USER", deleteUser);

  yield takeLatest("DELETE_CART_ITEMS", deleteCartItem);

  yield takeLatest("UPDATE_Quantity_CART", updateQuantityCart);

  yield takeLatest("COMPLETE_PURCHASE", completePurchase);

  yield takeLatest("BUY_NOW", buyNow);

  yield takeLatest("GET_PROFILE_details", getProfileDetails);

  yield takeLatest("UPDATE_PROFILE_DETAILS", updateProfileDetails);
}
