

function CharacterItem(props) {
    console.log('CharacterItem', props);

return(
    <> 
        <img src={props.characterData.photo} alt=''  />
        <h2>{props.characterData.name}   </h2>
        <p> {props.characterData.specie}   </p>
    </>

);
}
export default CharacterItem;