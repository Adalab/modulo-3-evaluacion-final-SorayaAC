////// React import //////
////// Services import //////
////// Partials import //////
////// Styles import //////
import '../styles/layout/card.scss';

function CharacterCard(props) {
  console.log(props);
  return (
    <li className="card">
      <img className="card__img" src={props.selectedCharacter.photo} alt="" />
      <h2 className="card__img">{props.selectedCharacter.name} </h2>
      <p className="card__specie"> {props.selectedCharacter.specie} </p>
      <p className="card__planet">{props.selectedCharacter.planet} </p>
      <p className="card__episodes">{props.selectedCharacter.episodes}</p>
      <p className="card__lifestatus">{props.selectedCharacter.lifestatus}</p>
    </li>
  );
}

export default CharacterCard;
