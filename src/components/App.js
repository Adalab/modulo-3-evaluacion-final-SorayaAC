////// React import //////
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
////// Services import //////
import api from '../services/api';
////// Partials import //////
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import CharacterCard from './CharacterCard';
////// Styles import //////
import '../styles/App.scss';

function App() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    api().then((initialdata) => {
      setData(initialdata);
    });
  }, []);

  const handleName = (ev) => {
    ev.preventDefault();
    setName(ev.currentTarget.value);
  };

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  const characterRoute = useRouteMatch('/character/:id');
  const characterId = characterRoute !== null ? characterRoute.params.id : '';

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Page
            filteredData={filteredData}
            handleName={handleName}
            name={name}
          />
          <Footer />
        </Route>

        <Route path="/character/:id">
          <CharacterCard selectedCharacter={selectedCharacter} />
        </Route>

        <Route>
          <section>No funciona</section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
