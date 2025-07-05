import "./App.css";

function App() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <>
      <section className="section__hero">
        <Navbar />
      </section>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar px-[3rem] py-[2.4rem]">
        <ul className="nav__list flex justify-between items-center">
          <div className="nav__box--theme">
            <li className="nav__item nav__item-light text-[4.8rem] text-[#08aa38] translate-y-[10%]">
              <ion-icon name="moon"></ion-icon>
            </li>
            <li className="nav__item nav__item--dark none">
              <ion-icon name="sun"></ion-icon>
            </li>
          </div>
          <div className="react__navbar flex items-center gap-[1.2rem] justify-center">
            <div className="text-[3.6rem] text-blue-500 self-center m-0 leading-none">
              <ion-icon name="logo-react"></ion-icon>
            </div>

            <p className="navbar__logo--text text-[3.6rem] text-[#86d039]  translate-y-[-10%] text-semibold self-center m-0 leading-none ">
              FOUNDATIONS
            </p>
          </div>
          <div className="nav__box--list flex gap-[3.6rem] justify-between items-center">
            <li
              className="nav__list--item text-[2.4rem] text-[#b3f975] text-semibold uppercase hover:scale-110 transition-all duration-500 hover:text-[#86d039] 
              hover:cursor-pointer
 "
            >
              Toggling
            </li>
            <li
              className="nav__list--item text-[2.4rem] text-[#b3f975] text-semibold uppercase hover:scale-110 transition-all duration-500 hover:text-[#86d039] 
              hover:cursor-pointer
"
            >
              Images
            </li>
            <li
              className="nav__list--item text-[2.4rem] text-[#b3f975] text-semibold uppercase hover:scale-110 transition-all duration-500 hover:text-[#86d039] 
              hover:cursor-pointer
"
            >
              Typing
            </li>
            <li
              className="nav__list--item text-[2.4rem] text-[#b3f975] text-semibold uppercase hover:scale-110 transition-all duration-500 hover:text-[#86d039] 
              hover:cursor-pointer
 "
            >
              Review
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default App;
