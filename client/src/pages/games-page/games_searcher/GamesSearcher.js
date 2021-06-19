import GamesSearcherCSS from './GamesSearcher.module.css';
import SearchBar from './SearchBar';

const GamesSearcher = () => {
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

      </div>
   );
}

export default GamesSearcher;