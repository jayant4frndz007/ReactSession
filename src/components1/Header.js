import React from "react";
function Header(props){
    console.log(props.type)
    return<h1>{props.name}</h1>
}

export default React.memo(Header);