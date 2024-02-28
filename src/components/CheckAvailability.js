import { Link } from 'react-router-dom';

const CheckAvailability = () => {
  return (
    <div className=" bg-[#CB9D74] h-[200px] w-full flex justify-center items-center">
      <Link
        to="/about"
        className="text-[#181C25] text-5xl border-2 p-3 border-[#181c25] hover:bg-[#181c25] hover:text-[#cb9d74]"
      >
        Check dates for availability
      </Link>
    </div>
  );
};

export default CheckAvailability;
