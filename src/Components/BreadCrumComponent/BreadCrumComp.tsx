import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";

function BreadCrumComp({name}:any) {
    const [items,setItems]=useState<any>([{title:'home'}])
    useEffect(()=>{
       let temp={
        title:name
       }
       setItems((prev:any)=>[...prev,temp])
                  
    },[name])
  return <div>
    <Breadcrumb
    items={items}/>
  </div>;
}

export default BreadCrumComp;
