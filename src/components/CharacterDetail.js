

function CharacterDetail(props) {
    console.log('CharacterDetail', props);

return(
    <> 
        <img src={props.characterData.photo} alt=''  />
        <h2>{props.characterData.name}   </h2>
        <p> {props.characterData.specie}   </p>
    </>

);
}
export default CharacterDetail;