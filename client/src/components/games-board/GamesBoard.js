import GameCard from "../game-card/GameCard";
import GamesBoardCSS from './GamesBoard.module.css';

const GamesBoard = ({ gamesData }) => {
   return (
      <div className={GamesBoardCSS.container}>
         {gamesData.map((game) => {
            return (<GameCard key={"gamecard" + game.name} game={game} />)
         })}
      </div>
   );
}

export default GamesBoard;