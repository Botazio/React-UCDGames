import NotFoundText from "./notfound_text/NotFoundText";
import Navbar from "../../components/navbar/NavBar";
import StarsBackground from "./stars-background/StarsBackground";

const NotFound = () => {
   return (
      <>
         <Navbar />
         <NotFoundText />
         <StarsBackground />
      </>
   );
}

export default NotFound;