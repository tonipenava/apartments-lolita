import { Link } from 'react-router-dom';
import Home from './Home';

const NoPage = () => {
  return (
    <div>
      <h1>No Page Found</h1>
      <h2>Man you are lost!</h2>
      <Link to={'/'}>Go back home</Link>
    </div>
  );
};

export default NoPage;
