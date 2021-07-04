import useFetch from '../../helpers/useFetch';
import GamesSearcherCSS from './GamesSearcher.module.css';
import SearchBar from '../search-bar/SearchBar';
import GamesBoard from '../games-board/GamesBoard';
import IsPending from '../ispending/IsPending';
import Error from '../error/Error';

const GamesSearcher = () => {
   const { data: gamesData, isPending, error } = useFetch("http://localhost:8000/games/all_games/");

   return (
      <div className={GamesSearcherCSS.container}>
         <div className={GamesSearcherCSS.search_system}>
            <div><SearchBar /></div>
            <div>
               <select className={GamesSearcherCSS.filter_1}>
                  <option value="volvo">Top Games</option>
                  <option value="saab">Most Played</option>
                  <option value="opel">Best Rated</option>
               </select>
            </div>
            <div>
               <select className={GamesSearcherCSS.filter_2}>
                  <option value="volvo">All Categories</option>
                  <option value="saab">Shooter</option>
                  <option value="opel">Action</option>
                  <option value="audi">2-D</option>
               </select>
            </div>
         </div>
         <div className={GamesSearcherCSS.gamesboard}>
            {/* If we get the data back we render the different games cards */}
            {isPending && <IsPending />}
            {error && <Error />}
            {gamesData && <GamesBoard gamesData={gamesData} />}
         </div>
      </div>
   );
}

export default GamesSearcher;