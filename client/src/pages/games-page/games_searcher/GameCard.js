import GamesSearcherCSS from './GamesSearcher.module.css';

const GameCard = ({ game }) => {
   return (
      <div className={GamesSearcherCSS.gamecard}>
         {console.log(game)}
      </div>
   );
}

export default GameCard;