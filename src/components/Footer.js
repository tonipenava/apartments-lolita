import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png';
const Footer = () => {
  return (
    <div>
      <footer class="flex flex-col items-center justify-center bg-slate-600 text-center text-white h-[200px] ">
        <div className="w-[40px]">
          <Link to="https://www.facebook.com/profile.php?id=100057149214565">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
