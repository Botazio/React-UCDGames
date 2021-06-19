import GamesSearcher from "./games_searcher/GamesSearcher"
import Navbar from "../../components/navbar/NavBar"

const GamesPage = () => {
   return (
      <>
         <Navbar />
         <GamesSearcher />
      </>
   );
}

export default GamesPage;