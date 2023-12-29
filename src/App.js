import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import SinglePage from "./components/watch/SinglePage"
import { HomePages } from './home/HomePages';
import Footer from './components/footer/Footer';

function App() {
  return <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePages} />
        <Route path='/singlepage/:id' component={SinglePage} exact />
      </Switch>
      <Footer/>
    </Router>
  </>
}

export default App;
