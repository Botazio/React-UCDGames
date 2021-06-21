import GameCard from "./GameCard";

const GamesBoard = ({ gamesData }) => {
   return (
      <div>
         {gamesData.map((game) => {
            return (<GameCard key={"gamecard" + game.name} game={game} />)
         })}
      </div>
   );
}

export default GamesBoard;