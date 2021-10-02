import "../styles/layout/page.scss";
import { useEffect, useState } from 'react';
import CharacterList from "./CharacterList";
import api from '../services/api';

const Page = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => { 
    api().then((initialdata)=> {
      console.log( initialdata);
      setData( initialdata);
    
    }); 
    },
    
    []);

    return (
        
<main className="main"> 
<h1>holi manoli</h1>
 <CharacterList data={data} />
</main>

    )
}

export default Page;