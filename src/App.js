import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from'./Component/About/About';
import Class from './Component/Class/Class'
import ContactUs from './Component/ContactUs/ContactUs';
import NotFound from './Component/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* Router starts here  */}
    <Router>
      {/* Contents of header */}
      <Header></Header>
    <Switch>
      <Route exact path="/">
         {/* Contents of home */}
        <Home></Home>
      </Route>
      <Route path="/Home">
        {/* Contents of home */}
        <Home></Home>
      </Route>
      <Route path="/About">
        {/* Contents of about */}
        <About></About>
      </Route>
      <Route path="/Class">
        {/* Contents of class */}
        <Class></Class>
      </Route>
      <Route path="/ContactUs">
        {/* Contents of contact */}
        <ContactUs></ContactUs>
      </Route>
      <Route path="*">
        {/* Contents of error 404 */}
        <NotFound></NotFound>
      </Route>
    </Switch>
    {/* Contents of footer */}
    <Footer></Footer>
    {/* End of Router part */}
    </Router>
   
    </div>
  );
}

export default App;