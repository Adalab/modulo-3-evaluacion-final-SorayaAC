import "../styles/layout/page.scss";
import { useEffect, useState } from 'react';

import CharacterList from "./CharacterList";
import Filters from "./Filters";
import api from '../services/api';

const Page = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

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
<Filters 
name={name} 
handleName={handleName} 
/>
<CharacterList data={filteredData} />
</main>

    )
}

export default Page;