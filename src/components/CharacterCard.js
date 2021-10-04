////// React import //////
////// Services import //////
////// Partials import //////
////// Styles import //////

function CharacterCard(props) {
  console.log(props);
  return (
    <li>
      <img src={props.selectedCharacter.photo} alt="" />
      <h2>{props.selectedCharacter.name} </h2>
      <p> {props.selectedCharacter.specie} </p>
    </li>
  );
}

export default CharacterCard;
