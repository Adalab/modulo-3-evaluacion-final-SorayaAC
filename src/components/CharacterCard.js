import {  useRouteMatch } from "react-router-dom";
    


function CharacterCard(props) {

//     const characterRoute = useRouteMatch('/character/:id');
//     const characterId = (characterRoute !== null ) ?characterRoute.params.id : "";
  
//     const selectedCharacter = data.find((character) => character.id === characterId);
//   console.log(selectedCharacter);
   

    return(

    <li>
   
        <img src={props.characterData.photo} alt=''  />
        <h2>{props.characterData.name}   </h2>
        <p> {props.characterData.specie}   </p>

    
    </li>

    );
}

export default CharacterCard;