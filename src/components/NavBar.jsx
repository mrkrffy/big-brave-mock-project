import assetLogo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="flex lg:justify-start justify-center lg:py-16 py-8 px-20 absolute top-0 w-full z-50 pointer-events-none">
      <img src={assetLogo} alt="Logo" className="h-16 w-auto" />
    </nav>
  );
};

export default NavBar;
