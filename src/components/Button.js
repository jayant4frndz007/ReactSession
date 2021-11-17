import React, { Component, useState } from 'react';


const Button=(props)=>{
    const [name,setName] = useState(null);

    const handleOnChange=(e)=>{
            console.log(e.target.value)
           setName(e.target.value);
    }
 const change=()=>{
     alert('hello')
 }
    return(<React.Fragment>
        <input type="text" onChange={handleOnChange}/>
        {name}
        <button onClick={()=>change()}>Click</button>
    </React.Fragment>)
}


export default Button;

// export default class Button extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:undefined,
//             beforeRender:'not loaded',
//             data:undefined
//         }
//         console.log('constructor');

//     }

//      handleOnChange=(e)=>{
//            // console.log(e.target.value);
//             this.setState({name:e.target.value})
//     }
//  componentWillMount(){
//      console.log('will mount');
//      this.setState({data:['abc','xyz','123']})
//  }
// componentDidMount(){
//     console.log('did mount');
// }

//     render(){
//         console.log('render');
//         return(<React.Fragment>
//             <input type="text" onChange={this.handleOnChange}/>
//             {this.state.name}
//             {this.state.beforeRender}
//            <button  disabled={!this.props.action}>{this.props.name}</button>    

//            {
//                this.state.data.map((data)=>{
//                    return <li>
//                        {data}
//                    </li>
//                })
//            } 
//         </React.Fragment>)
//     }

// }