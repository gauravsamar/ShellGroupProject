import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Home from "./components/Home";
import Goals from "./components/Goals";
import Domestic from "./components/FootprintCalc/Domestic";
import Transport from "./components/FootprintCalc/Transport";
import Home2 from "./components/home2";
import DenseTable from './components/Table';

import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import {ApolloClient , ApolloProvider , HttpLink, InMemoryCache} from "@apollo/client";
import Userfetchsample from './components/Userfetchsample';


//Initializing apollo client
const client  = new ApolloClient({
  cache : new InMemoryCache(),
  link: new HttpLink({
    uri : "https://localhost:5001/graphql" //for consuming the graphql api
  }),
  credentials : "same-origin"
})


function AppRouter(){
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/goal" element={<Goals/>} />
          <Route path="*" element = {<Error/>} />
          <Route path="/domestic" element={<Domestic/>}/>
          <Route path="/transport" element={<Transport/>}/>
          <Route path="/home"  element={<Home2/>}/>
          <Route path="/table" element={<DenseTable/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}
function App() {
  return (
    <ApolloProvider client={client} >
      <AppRouter/>
    </ApolloProvider>
  );
}

export default App;
