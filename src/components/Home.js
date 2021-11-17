import { useState, useEffect, Component} from "react";

const Home=()=>{
    const [name,setName] = useState('A');
    const [address,setAddress] = useState('Ranchi');

    useEffect(()=>{
            console.log('getDerivedStateFromProps')
            //getDerivedStateFromProps 
    })

    useEffect(()=>{
        //componentDidMount
        console.log('componentDidMount')
    },[])


    useEffect(()=>{
        //Whenever name state will change
        console.log('whenever state wiil change')
    },[address])

    const changeName=()=>{
        setName('B')
    }
    return(<div>
        Home {name}
        <button onClick={changeName}>Change</button>
    </div>)
}

export default Home;