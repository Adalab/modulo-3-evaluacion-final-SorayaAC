////// React import //////
import { Link } from 'react-router-dom';
////// Services import //////
////// Partials import //////
import Header from './Header';
////// Styles import //////
import '../styles/layout/card.scss';

function CharacterCard(props) {
  return props.selectedCharacter === undefined ? (
    <p>No existe ese personaje</p>
  ) : (
    <li className="card">
      <Header />
      <Link to="/">
        <button>Go back</button>
      </Link>
      <img className="card__img" src={props.selectedCharacter.photo} alt="" />
      <h2 className="card__img">{props.selectedCharacter.name} </h2>
      <p className="card__specie"> {props.selectedCharacter.specie} </p>
      <p className="card__planet">{props.selectedCharacter.planet} </p>
      <p className="card__episodes">
        {props.selectedCharacter.episodes.length}
      </p>
      <p className="card__lifestatus">{props.selectedCharacter.lifestatus}</p>
    </li>
  );
}

export default CharacterCard;
