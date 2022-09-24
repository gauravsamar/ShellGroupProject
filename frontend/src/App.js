import logo from './logo.svg';
import './App.css';
import {ApolloClient , ApolloProvider , HttpLink, InMemoryCache} from "@apollo/client";

//Initializing apollo client
const client  = new ApolloClient({
  cache : new InMemoryCache(),
  link: new HttpLink({
    uri : "https://localhost:4000/graphql" //for consuming the graphql api
  }),
  credentials : "same-origin"
})



function App() {
  return (
    <ApolloProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
