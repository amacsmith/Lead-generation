import './App.css';
import GlobalStyle from './GlobalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import {Footer, Navbar} from './Components/';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      <Navbar />
      <Switch>
      <Route path="/" exact Component={Home} />
      <Route path="/#services" exact Component={Services} />
      <Route path="/#products" exact Component={Products} />
      <Route path="/#sign-up" exact Component={SignUp} />
      </Switch> 
      <Footer />  
    </Router>
  );
}

export default App;
