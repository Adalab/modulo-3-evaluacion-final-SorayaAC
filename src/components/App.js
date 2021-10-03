import { Route, Switch, useRouteMatch } from "react-router-dom";
import '../styles/App.scss';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import CharacterCard from "./CharacterCard";


function App() {

  
  return (
    <>
    <Switch>

    <Route exact path="/">
    <Header />
    <Page/>
    <Footer />
    </Route>

     <Route path="/character/:id">
     <CharacterCard />
     </Route>
     
     <Route>
       <section>
         No funciona
       </section>
     </Route>
     </Switch>
    </>
  );
}

export default App;
