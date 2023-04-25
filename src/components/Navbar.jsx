function Navbar() {
  return (
    <nav className="w-screen h-[60px] px-[50px] flex flex-row items-center justify-between">
      <div>
        <img
          src="https://www.finos.tech/wp-content/uploads/2020/02/FinOSinkcmprsd.svg"
          alt="logo"
          className="h-[35px]"
        />
      </div>
      <div className="flex flex-row items-center gap-[50px] text-blue-600 font-semibold text-xl">
        <a href="https://www.finos.tech/#">Products</a>
        <a href="https://www.finos.tech/#">About</a>
        <a href="https://www.finos.tech/contact/">Contact</a>
        <button className="px-[20px] py-[8px] bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
