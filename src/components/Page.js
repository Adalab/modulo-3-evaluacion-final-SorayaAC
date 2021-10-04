////// React import //////
////// Services import //////
////// Partials import //////
import CharacterList from './CharacterList';
import Filters from './Filters';
////// Styles import //////
import '../styles/layout/page.scss';

const Page = (props) => {
  return (
    <main className="main">
      <Filters name={props.name} handleName={props.handleName} />
      <CharacterList data={props.filteredData} />
    </main>
  );
};

export default Page;
