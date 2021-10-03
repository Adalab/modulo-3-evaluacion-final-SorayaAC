import "../styles/layout/page.scss";
import { useEffect, useState } from 'react';
import CharacterList from "./CharacterList";
import api from '../services/api';

const Page = () => {
    
    const [data, setData] = useState([]);
const [name, setName] = useState('');
    useEffect(() => { 
    api().then((initialdata)=> {
      console.log( initialdata);
      setData( initialdata);
    
    }); 
    },
    
    []);



    const handleName = (ev) =>{
setName(ev.currentTarget.value);
    }


    const filteredData = data.filter( (character) => character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase() ) );

    return (
        
<main className="main"> 
<input
type="text"
name=""
id=""
value={name}
onChange={handleName}
/>
 <CharacterList data={filteredData} />
</main>

    )
}

export default Page;