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
    <li>
      <Header />
      <div className="card">
        <div>
          <Link to="/">
            <button className="card__button">Go back</button>
          </Link>
        </div>
        <div className="card__character">
          <img
            className="card__character--img"
            src={props.selectedCharacter.photo}
            alt=""
          />
          <h2>Name: {props.selectedCharacter.name} </h2>
          <p>Specie: {props.selectedCharacter.specie} </p>
          <p>Planet: {props.selectedCharacter.planet} </p>
          <p>
            {' '}
            Episodes:
            {props.selectedCharacter.episodes.length}
          </p>
          <p>Life Status: {props.selectedCharacter.lifestatus}</p>
        </div>
      </div>
    </li>
  );
}

export default CharacterCard;
