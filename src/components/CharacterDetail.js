////// React import //////
import { Link } from 'react-router-dom';
////// Services import //////
////// Partials import //////
////// Styles import //////

function CharacterDetail(props) {
  // console.log('CharacterDetail', props);

  return (
    <>
      <Link to={`/character/${props.characterData.id}`}>
        <img src={props.characterData.photo} alt="" />
        <h2>{props.characterData.name} </h2>
        <p> {props.characterData.specie} </p>
      </Link>
    </>
  );
}
export default CharacterDetail;
