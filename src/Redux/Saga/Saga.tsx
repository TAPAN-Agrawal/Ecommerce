import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { message } from "antd";
import { getProductsInCart, updateProduct } from "../Action/Action";
import { axiosInstance, axiosInstanceAuth } from "../../Service/Service";

export function* register(action: any) {
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
      toast.success("user registered successfully");
    } else {
      console.log("message");
    }
  } catch (error: any) {
    console.log("error", error.response.data.message);
  }
}

export function* login(action: any) {
  const temp = action.payload;

  console.log("first", temp);
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.post,
      "/auth/login",
      temp
    );
    console.log("response", response);
    if (response) {
      toast.success("user logged in  successfully");
      // console.log('token', response.data.data.token)
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
    // console.log("google", response)
  } catch (error) {}
}

export function* getAllProducts(action: any) {
  try {
    let { page, limit, category, sort } = action.payload;
   

    const response: AxiosResponse<any> = yield call(() => {
      if (category !== null) {

            if(sort !== null) {
              return axiosInstanceAuth.get(
                `/products/all?page=${page}&limit=${limit}&category=${category}&sortOrder=${sort}`
              );
            }
            else{

              return axiosInstanceAuth.get(
                `/products/all?page=${page}&limit=${limit}&category=${category}`
              );
            }





      } 
      else {
        if(sort !== null) {
          return axiosInstanceAuth.get(
            `/products/all?page=${page}&limit=${limit}&sortOrder=${sort}`
          );
        }
            else{

              return axiosInstanceAuth.get(
                `/products/all?page=${page}&limit=${limit}`
              );
            }



      }
    });

    // console.log("new", response.data);
    if (response) {
      yield put({ type: "SET_ALL_PRODUCTS", payload: response.data });
    }
  } catch (error) {}
}
export function* getSingleProduct(action: any) {
  const id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.get,
      `/products/product/${id}`
    );
    yield put({ type: "SET_SINGLE_PRODUCTS", payload: response.data });

    //  console.log("single products", response.data);
  } catch (error) {}
}

export function* addProduct(action: any) {
  try {
    const d = action.payload;

    const formData = new FormData();
    formData.append("product_name", d.name);
    formData.append("price", d.price);
    formData.append("quantity", d.quantity);
    formData.append("category", d.category);
    formData.append("description", d.description);
    formData.append("product_img", d.file);
    console.log("file", d.file);

    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.post,
      "/products/add_product",
      formData
    );
    if (response) {
      toast.success("product added successfully");
      yield put({ type: "ADD_PRODUCT_REDUCER", payload: response.data });
    }
    console.log("add product", response.data);
  } catch (error) {
    toast.error("product not added successfully");
  }
}
export function* updateProducts(action: any) {
  try {
    const d = action.payload;
    const id = d.id;

    const formData: any = new FormData();
    formData.append("product_name", d.name);
    formData.append("price", 50);
    formData.append("quantity", "20");
    formData.append("category", d.category);
    formData.append("description", d.description);
    formData.append("product_img", d.file);
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.patch,
      `/products/update_product/${id}`,
      formData
    );
    if (response) {
      toast.success("product update successfully");
      yield put({ type: "UPDATE_PRODUCT_REDUCER", payload: response.data });
    }
    console.log("add product", response.data);
  } catch (error) {
    toast.error("product not update ");
  }
}

export function* deleteProduct(action: any) {
  const id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.delete,
      `/products/delete_product/${id}`
    );

    if (response) {
      yield put({ type: "DELETE_PRODUCT_REDUCER", payload: id });
    }
  } catch (error) {}
}

export function* searchProduct(action: any) {
  const { search, page, limit } = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstance.get,
      `/products/search_text/?search=${search}&page=${page}&limit=${limit}`
    );
    console.log("status", response.status);
    if (response.status === 200) {
      console.log("search saga", response.data.data);
      yield put({
        type: "SEARCH_PRODUCT_REDUCER",
        payload: response.data.data,
      });
    } else {
      // yield put({ type: "CLEAR_SEARCH_PRODUCT_REDUCER"});
    }
  } catch (error: any) {
    console.log("errrrrrr", error.response.status);
    yield put({ type: "CLEAR_SEARCH_PRODUCT_REDUCER" });
  }
}

export function* addAdmin(action: any) {
  const temp = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.post,
      `/auth/add_admin`,
      temp
    );
    if (response) {
      toast.success("admin added successfully");
    }
  } catch (error) {}
}

export function* getAllUsers(action: any) {
  const { page, limit } = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.get,
      `/auth/users/?page=${page}&limit=${limit}`
    );
    if (response) {
      yield put({ type: "ADD_USER_REDUCER", payload: response.data.data });
    }
  } catch (error) {}
}

export function* addToCart(action: any) {
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
    if (response) {
      toast.success("Item added to cart");
    }
  } catch (error) {}
}

export function* getProductsInCarts() {
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.get,
      `/products/carts`
    );
    if (response) {
      toast.success("cart items fetched");
      yield put({
        type: "SET_PRODUCTS_CART_REDUCER",
        payload: response.data.data,
      });
      console.log("cart items", response.data.data);
    }
  } catch (error) {}
}

export function* deleteUser(action: any) {
  let id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.delete,
      `/auth/remove_user/${id}`
    );
    if (response) {
      toast.success("removed user");
      yield put({ type: "DELETE_USER_REDUCER", payload: id });
    }
  } catch (error) {}
}

export function* deleteCartItem(action: any) {
  let id = action.payload;
  try {
    const response: AxiosResponse<any> = yield call(
      axiosInstanceAuth.delete,
      `/products/remove_from_cart/${id}`
    );
    if (response) {
      toast.success("item removed from cart");
      yield put({ type: "DELETE_CART_ITEM_REDUCER", payload: id });
    }
  } catch (error) {}
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

  yield takeLatest("ADD_TO_CART", addToCart);

  yield takeLatest("GET_PRODUCTS_IN_CART", getProductsInCarts);

  yield takeLatest("DELETE_USER", deleteUser);

  yield takeLatest("DELETE_CART_ITEMS", deleteCartItem);
}
