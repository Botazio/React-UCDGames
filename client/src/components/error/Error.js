import ErrorCSS from './Error.module.css';
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className={ErrorCSS.text}>
         <h2>Sorry</h2>
         <p>There was an error</p>
         <Link to="/">Back to the homepage...</Link>
      </div>
   );
}

export default Error;