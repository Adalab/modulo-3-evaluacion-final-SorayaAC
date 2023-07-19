////// React import //////
import { Link } from 'react-router-dom';
////// Services import //////
////// Partials import //////
////// Styles import //////
import '../styles/layout/detail.scss';

function CharacterDetail(props) {
  return (
    <article className="">
      <div className="detail">
        <img className="detail__img" src={props.characterData.photo} alt="" />
        <h2 className="detail__name">{props.characterData.name}</h2>
        <p className="detail__specie">{props.characterData.specie}</p>
        <Link
          className="detail__link"
          to={`/character/${props.characterData.id}`}
        >
          <button className="detail__link--btn">Squanch me!</button>
        </Link>
      </div>
    </article>
  );
}
export default CharacterDetail;
