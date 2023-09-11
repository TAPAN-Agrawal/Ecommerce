export const carouselImg =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg";

export const formError = {
  requiredField: "Please  fill required field",
  userRequired: "Username required ",
  email: {
    email: "email",
    emailRequired: "Email required",
    validEmail: "Enter  valid email",
  },
  password: {
    passwordRequired: "Password required",
    strongPassword: "Create strong password",
    passwordLength: "Minimum length is 8 characters",
    confirmPasswordMsg: "Confirm password",
    passwordNotMatching: "Password not match!",
  },
  minLength: "Please enter confirmation password",
};

//toast
export const toastMsg={
     unauthorized :"You are not authorized",
     logoutSuccess : "Logout Successfully ",
     userToast : "Only  user can add product to cart",
     loginAdd : "Please login to add product in cart",
     loginBuy : "Please login to purchase product"
}


//api endpoints

export const apiEndpoints={

     register : "/auth/register",
     login : "/auth/login",
     google: "/auth/google",
     getAllProducts : "/products/all",
     getSingleProduct : "/products/product_by_id",
     addProduct : "/products/add_product",
     updateProduct : "/products/update_product/",
     deleteProduct:'/products/delete_product/',
     searchProduct:'/products/search_text/',
     addAdmin:'/auth/add_admin',
     getAllUsers:'/auth/users/',
     getAllAdmins:'/auth/admins/',
     addToCart:'/products/add_to_cart/',
     getProductsInCarts:'/products/carts',
     deleteUser:'/auth/remove_user/',
     deleteCartItem:'/products/remove_from_cart/',
     updateQuantityCart:'/products/update_quantity/',
     completePurchase:'/products/shipping_details',
     buyNow:'/products/buy_now/',
     getProfileDetails:'/auth/user',
     updateProfileDetails:'/auth/update_user'
}

