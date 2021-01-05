import React from "react";

const ListDisplay = (props) => {
    const divLay = {width: "7rem", border: "dashed", borderRadius: "30px", padding: "5px", margin: "15px", alignment: "right"}
    const bold = {fontWeight: "bold", color: "#800000"}
   return props.items.map((item, index) => {
        return (
            <div key = {index}> 
            <span style = {bold}>item:</span> {item.item} <br></br>
            <br></br>
            <span>quantity:</span> {item.quantity}<span>  </span>
            <button onClick ={()=>{props.decrease(item.id, item.quantity)}}>-</button><span>  </span>
            <button onClick ={() => {props.increase(item.id, item.quantity)}}>+</button><span>  </span>
            <button onClick = {() => {props.deleteItem(item.id)}}>delete</button><span>  </span>
            <br></br>
            </div>
        )
    })
}

export default ListDisplay;