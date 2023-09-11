import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store";
import { ConfigProvider } from "antd";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <Provider store={store}>
    <BrowserRouter>
    <ConfigProvider
   theme={{
      
      token: {
        colorPrimary:'rgb(20, 39, 155)',
        
      },
      // components:{

      //   Button:{
      //     colorPrimary:'rgb(255, 0, 0)',
      //   }
      // }
    }}
  >
      <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
