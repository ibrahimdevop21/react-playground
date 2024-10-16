import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt='Apple' width={14} height={18} />
      </nav>
      <div>
        {['Phones', 'Macbooks', 'Tablets'].map((nav, i) => (
          <div key={i}>{nav}</div>
        ))}
      </div>
      <div>
        <img src={searchImg} alt='Search' width={18} height={14} />
        <img src={bagImg} alt='bag' width={18} height={14} />
      </div>
    </header>
  );
};

export default Navbar;
