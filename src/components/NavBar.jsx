import assetLogo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="flex justify-start py-16 px-20 absolute top-0 w-full">
      <img src={assetLogo} alt="Logo" className="h-16 w-auto" />
    </nav>
  );
};

export default NavBar;
