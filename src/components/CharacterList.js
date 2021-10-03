import CharacterDetail from "./CharacterDetail";

function CharacterList(props) {
    
const html = props.data.map((characterData) => (  
<li key={characterData.id}>
<CharacterDetail characterData={characterData} />
</li>
));
    return(
        <ul>
         {html}   
        </ul>
    );
}

export default CharacterList;