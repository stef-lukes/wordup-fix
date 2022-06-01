import logo from "../assets/word-up.svg";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="" className="logo" />
        <h2>SELECT YOUR LETTERS</h2>
      </header>
    </>
  );
};

export default Header;
