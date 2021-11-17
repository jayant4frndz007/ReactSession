import './App.css';
import Button from './components/Button';
import { BrowserRouter as Router , Switch , Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Api from './components1/Api';

function App() {
  return (
    <Router >
            <Header/>
        
        <Switch>
            <Route exact path="/">
                {/* <Home/> */}
                
                <HOCCompRed comp={HigerButton} />
                <HOCCompBlue comp={HigerButton} />
            </Route>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route path="/api">
              <Api />
            </Route>
            
        </Switch>
        
    </Router>
  )
}

function HOCCompRed(props){
  return <div style={{backgroundColor:'red'}}>Hello button  <props.comp/> </div>
}

function HOCCompBlue(props){
  return <div style={{backgroundColor:'blue'}}>Hello button  <props.comp/> </div>
}

function HigerButton(){
  return <button>Click</button>
}


export default App;
