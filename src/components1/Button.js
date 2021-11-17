import React from "react";
function Button(props){
    console.log('button',props.children)
    return<button onClick={props.clickHandler} >{props.children}</button>
}
export default React.memo(Button);