////// React import //////
////// Services import //////
////// Partials import //////
import CharacterDetail from './CharacterDetail';
////// Styles import //////

function CharacterList(props) {
  const renderHtml = props.data.map((characterData) => (
    <li key={characterData.id}>
      <CharacterDetail characterData={characterData} />
    </li>
  ));
  return <ul>{renderHtml}</ul>;
}

export default CharacterList;
