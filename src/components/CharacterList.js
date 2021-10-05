////// React import //////
////// Services import //////
////// Partials import //////
import CharacterDetail from './CharacterDetail';
////// Styles import //////
import '../styles/layout/list.scss';

function CharacterList(props) {
  const renderHtml = props.data.map((characterData) => (
    <li className="list__item" key={characterData.id}>
      <CharacterDetail characterData={characterData} />
    </li>
  ));
  return props.data.length === 0 ? (
    <p className="list__error">Personaje no encontrado</p>
  ) : (
    <ul className="list">{renderHtml}</ul>
  );
}

export default CharacterList;
