import logo from './logo.svg';
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";

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
          
          <Route exact path="/" element={<Landing/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element = {<Error/>} />
         
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
