import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { motion } from 'framer-motion';
import DatePicker from '../components/DatePicker';
const About = () => {
  return (
    <div className="flex flex-col items-center justify-start w-screen h-[200vh] bg-slate-600">
      <DatePicker />
    </div>
  );
};

export default About;
