import { useState,useCallback, useRef } from "react";
import Footer from "./Footer";
import Button from './Button';
import Header from "./Header";

function UseCallBach(){
    const [home,setHome] = useState('Home Page');
    const [about,setAbout] = useState('About Page');
    const refer = useRef();

    const HomeHeader=useCallback(()=>{
        console.log(refer.current)
        setHome('Home Page Update');
    },[home])
    const AboutHeader=useCallback(()=>{
        setAbout('About Page Update')
    },[about])

    return(<div>
                <Header type="home" name={home}/>
                <Button clickHandler={HomeHeader} ref={refer}> Update Home Header</Button>
                <br/>
                <Header type="about" name={about}/>
                <Button clickHandler={AboutHeader}> Update About Header</Button>

                <Footer/>
    </div>)
}

export default UseCallBach;