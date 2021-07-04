import GameCardCSS from './GameCard.module.css';

const GameCard = ({ game }) => {
   return (
      <div>
         <div className={GameCardCSS.gamecard}>
            {console.log(game)}
            <img className={GameCardCSS.image} src={require('./fixtures/' + game.imgURL).default} alt={'image ' + game.imgURL}></img>
            <div><h3>{game.name}</h3></div>
            <div><h4>{game.author}</h4></div>
            <div><p>{game.short_desc}</p></div>
            <button className={GameCardCSS.play_button}><h3>PLAY!</h3></button>
         </div>
         {game.category1 && <button className={GameCardCSS.game_category}><h3>{game.category1}</h3></button>}
         {game.category2 && <button className={GameCardCSS.game_category}><h3>{game.category2}</h3></button>}
         {game.category3 && <button className={GameCardCSS.game_category}><h3>{game.category3}</h3></button>}
         {game.category4 && <button className={GameCardCSS.game_category}><h3>{game.category4}</h3></button>}
      </div>
   );
}

export default GameCard;