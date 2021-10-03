import { Route, Switch } from "react-router-dom";
import '../styles/App.scss';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';


function App() {

  return (
    <>
    <Switch>
      <Route>
      <Header />
     <Page/>
     <Footer />
     </Route>
     </Switch>
    </>
  );
}

export default App;
