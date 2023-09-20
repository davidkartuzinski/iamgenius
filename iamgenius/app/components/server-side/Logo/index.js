import Image from 'next/image';
import logo from './logo.png';

const Logo = ({ width = '97', height = '40' }) => {
  return <Image priority src={logo} width={width} height={height} alt='logo' />;
};

export default Logo;
