/* eslint-disable react/prop-types */
import { useState, createRef } from "react";
import "./App.css";
import { motion, useInView } from "motion/react";
const imageData = [
  {
    name: "React Foundations",
    explaination: "An app to learn the basics of React",
    photoName: "Screenshot-1.png",
    i: -1,
    skills: "https://skillicons.dev/icons?i=git,react,tailwind,vite",
  },
  {
    name: "Portfolio",
    explaination: "My main portfolio website",
    photoName: "Screenshot-3.png",
    i: 0,
    skills: "https://skillicons.dev/icons?i=html,css,git,javascript,tailwind",
  },
  {
    name: "Mother + Son Dining",
    explaination:
      "My first landing page, made to learn the basics of HTML and CSS",
    photoName: "Screenshot-2.png",
    i: 1,
    skills: "https://skillicons.dev/icons?i=html,css,git,javascript",
  },
];
function App() {
  return (
    <>
      <HeroSection />
      <ImageSection />
    </>
  );
}

function HeroSection() {
  const now = new Date();
  const hour = now.getHours();
  return (
    <>
      <Navbar />
      <section className="section__hero mt-[9.6rem] h-[70vh] ">
        <div className="hero__textbox flex justify-start items-center flex-col gap-[6.4rem]">
          <motion.h1
            initial={{ x: -1600, blur: ["5px"], opacity: 0 }}
            animate={{ x: 0, blur: ["0px"], opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="hero__heading text-[9.6rem]  font-bold bg-gradient-to-r from-[#b6f77a] to-[#057d39] bg-clip-text text-transparent tracking-tight"
          >
            Good
            <span className="text-[#2563eb]">{" {"}</span>
            {hour >= 12 && hour <= 17
              ? "Afternoon"
              : hour >= 18
              ? "Night"
              : "Morning"}
            <span className="text-[#2563eb]">{"} "}</span>
            Viewer!
          </motion.h1>
          <motion.p
            initial={{ x: 1600, blur: ["5px"], opacity: 0 }}
            animate={{ x: 0, blur: ["0px"], opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="hero__info text-[#d6f8df] text-[2.4rem] max-w-[60vw] tracking-[0.3rem]"
          >
            {" "}
            This is a simple app of basic projects that will help me solidify my
            basics. Above was the first project, a conditional statment changing
            depending on the time of day.
          </motion.p>
          <motion.button
            initial={{ scale: 0, blur: ["5px"], opacity: 0 }}
            animate={{ scale: 1, blur: ["0px"], opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeIn" }}
            className="hero__button text-[2.4rem] px-[2.4em] py-[0.6em] rounded-4xl text-[#2563eb] bg-[#d6f8df] transition-all hover:scale-125 hover:translate-y-[-2rem] hover:cursor-pointer overflow-hidden relative"
          >
            SEE MORE
          </motion.button>
        </div>
      </section>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar px-[3rem] py-[2.4rem]">
        <ul className="nav__list flex justify-between items-center">
          <motion.div
            initial={{ y: -1600, blur: ["5px"], opacity: 0 }}
            animate={{ y: 0, blur: ["0px"], opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="nav__box--theme"
          >
            <li className="nav__item nav__item-light text-[4.8rem] text-[#08aa38] translate-y-[10%] ">
              <ion-icon name="moon"></ion-icon>
            </li>
            <li className="nav__item nav__item--dark none">
              <ion-icon name="sun"></ion-icon>
            </li>
          </motion.div>
          <motion.div
            initial={{ y: -1600, blur: ["5px"], opacity: 0 }}
            animate={{ y: 0, blur: ["0px"], opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
            className="react__navbar flex items-center gap-[1.2rem] justify-center"
          >
            <div className="text-[3.6rem] text-blue-500 self-center m-0 leading-none">
              <ion-icon name="logo-react"></ion-icon>
            </div>

            <p className="navbar__logo--text text-[3.6rem] text-[#86d039]  translate-y-[-10%] text-semibold self-center m-0 leading-none ">
              FOUNDATIONS
            </p>
          </motion.div>
          <div className="nav__box--list flex gap-[3.6rem] justify-between items-center">
            <NavbarItem content="Toggling" />
            <NavbarItem content="Images" />
            <NavbarItem content="Typing" />
            <NavbarItem content="Review" />
          </div>
        </ul>
      </nav>
    </>
  );
}

function NavbarItem(props) {
  return (
    <>
      <motion.li
        initial={{ y: -1600 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
        className="nav__list--item text-[2.4rem] text-[#b3f975] text-semibold uppercase hover:scale-125 transition-all duration-500 hover:text-[#86d039] 
              hover:cursor-pointer
 "
      >
        {props.content}
      </motion.li>
    </>
  );
}
function ImageSection() {
  const ref = createRef();
  const isInView = useInView(ref, { threshold: 1 });
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        className="section__image mt-[9.6rem]  "
      >
        <HeroHeading content="IMAGE CAROUSEL"></HeroHeading>
        <ul className="image__carousel--list mt-[9.6rem]  flex flex-col items-center ">
          {imageData.map((image, index) => {
            return (
              <Image
                key={image.photoName}
                ImageInfo={image}
                index={index}
                imgIndex={imgIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            );
          })}
        </ul>
        <button
          onClick={() =>
            setImgIndex((imgIndex - 1 + imageData.length) % imageData.length)
          }
          className="slider__left absolute left-[5%] visible bg-[#d6f8df] w-[80px] h-[80px] rounded-full aspect-ratio-1 bottom-[-85%] text-[#2563eb] text-[6rem]"
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button
          onClick={() =>
            setImgIndex((imgIndex + 1 + imageData.length) % imageData.length)
          }
          className="slider__right absolute left-[87%]  visible bg-[#d6f8df] w-[80px] h-[80px] rounded-full aspect-ratio-1 bottom-[-85%] text-[#2563eb] text-[6rem]"
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </motion.section>
      {console.log(imgIndex)}
    </>
  );
}
function Image({ ImageInfo, index, imgIndex }) {
  return (
    <>
      <motion.li
        initial={{ x: 100 }}
        animate={{ x: (index - imgIndex) * 100 + "vw" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="image__carousel--item w-[70%]  h-[70%] absolute overflow-hidden border-black border-8 mx-[1.2rem] group "
        // style={{ transform: `translateX(${(index - imgIndex) * 100}vw)` }}
      >
        <img
          src={ImageInfo.photoName}
          className="group-hover:blur-xl group-hover:brightness-60 transition-all duration-500"
        />
        <div className="image__information flex flex-col items-center ">
          <p className="project__heading text-[7.2rem] text-[#08aa38]   transition-all duration-500 group-hover:translate-y-[-40rem] uppercase group-hover:cursor-pointer">
            {ImageInfo.name}
          </p>
          <p className="project__info text-[2.4rem] text-[#d6f8df]  transition-all duration-500 group-hover:translate-y-[-35rem]  group-hover:cursor-pointer">
            {ImageInfo.explaination}
          </p>
          <ul className="project__skills">
            <li className="project__skill text-[2.4rem] text-[#d6f8df]  transition-all duration-500 group-hover:translate-y-[-30rem]  group-hover:cursor-pointer">
              <img src={ImageInfo.skills} alt="" className="skill__img" />
            </li>
          </ul>
        </div>
      </motion.li>
    </>
  );
}
function HeroHeading(props) {
  return (
    <>
      <div className="group relative w-full flex items-center justify-center">
        <h1 className="image__heading text-[7.2rem] transition-all duration-500 hover:text-[#2563eb] hover:scale-110 hover:cursor-pointer tracking-tighter w-[50%] rounded-4xl text-[#d6f8df]">
          {props.content}
        </h1>
        <div className="absolute left-[30%] bottom-0 h-[0.4rem] w-[40%] bg-[#2563eb] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </>
  );
}
export default App;
