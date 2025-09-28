// Polish animations, create 4 100s on lighthouse
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
    alt: "react foundations project",

    skills: "https://skillicons.dev/icons?i=html,css,git,tailwind,vite,react",
  },
  {
    name: "Portfolio",
    explaination: "My main portfolio website",
    photoName: "Screenshot-3.png",
    i: 0,
    skills: "https://skillicons.dev/icons?i=html,css,git,javascript,tailwind",

    alt: "portfolio project",
  },
  {
    name: "Mother + Son Dining",
    explaination:
      "My first landing page, made to learn the basics of HTML and CSS",
    photoName: "Screenshot-2.png",
    i: 1,
    skills: "https://skillicons.dev/icons?i=html,css,git,javascript",

    alt: "restaurant project",
  },
];
const itemData = [
  // Electronics
  {
    name: "Wireless Earbuds",
    explaination:
      "Compact earbuds with crystal-clear sound and touch controls.",
    photoName: "black-01-solobuds-removebg-preview.png",
    price: 99.99,
    i: -1,
    category: "Electronics",
    alt: "black earbuds",
  },
  {
    name: "  Speaker",
    explaination:
      "Rugged, waterproof speaker with powerful bass for outdoor adventures.",
    photoName: "loudspeaker-icon-big-horn-speaker-removebg-preview.png",
    price: 79.99,
    i: -1,
    category: "Electronics",
    alt: "speaker",
  },
  {
    name: "Smartwatch Pro",
    explaination:
      "Tracks fitness, notifications, and heart rate with a sleek display.",
    photoName: "images-removebg-preview (1).png",
    price: 199.99,
    i: -1,
    category: "Electronics",
    alt: "smartwatch",
  },

  // Fitness
  {
    name: " Dumbbells",
    explaination:
      "Space-saving dumbbells with adjustable weights for versatile workouts.",
    photoName: "RHD-removebg-preview.png",
    price: 149.99,
    i: -1,
    category: "Fitness",
    alt: "dumbbells",
  },
  {
    name: "Yoga Mat ",
    explaination:
      "Non-slip, cushioned mat perfect for yoga, pilates, and stretching.",
    photoName: "images-removebg-preview (2).png",
    price: 39.99,
    i: -1,
    category: "Fitness",
    alt: "yoga mat",
  },
  {
    name: "Resistance Bands ",
    explaination:
      "Set of bands for strength training, flexibility, and rehab exercises.",
    photoName:
      "pngtree-resistance-bands-isolated-on-transparent-background-png-image_15807136.png",
    price: 29.99,
    i: -1,
    category: "Fitness",
    alt: "resistance bands",
  },

  // Home
  {
    name: "LED Desk Lamp",
    explaination:
      "Adjustable desk lamp with touch controls and color temperature options.",
    photoName: "pngtree-led-desk-lamp-png-image_13215927.png",
    price: 59.99,
    i: -1,
    category: "Home",
    alt: "led desk lamp",
  },
  {
    name: "Air Purifier ",
    explaination:
      "Removes dust, allergens, and odors from small rooms efficiently.",
    photoName: "pngtree-levoit-air-purifiers-for-home-png-image_12545738.png",
    price: 129.99,
    i: -1,
    category: "Home",
    alt: "air purifier",
  },
  {
    name: " Coffee Maker",
    explaination:
      "Brew fresh coffee anywhere with this compact, travel-friendly machine.",
    photoName:
      "Coffeemaker-isolated-on-transparent-background-PNG-removebg-preview.png",
    price: 89.99,
    i: -1,
    category: "Home",
    alt: "coffee maker",
  },
];
function App() {
  return (
    <>
      <HeroSection />
      <ImageSection />
      <CommerceSection />
      <ReviewSection />
      <FooterSection />
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
        <div className="hero__textbox flex justify-start mt-[12rem] items-center flex-col gap-[6.4rem]">
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
            This is a simple app of basic projects that will help me solidify my
            basics. Above was the first project, a conditional statment changing
            depending on the time of day.
          </motion.p>
          <motion.button
            initial={{ scale: 0, blur: ["5px"], opacity: 0 }}
            animate={{ scale: 1, blur: ["0px"], opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, ease: "easeIn" }}
            className="hero__button mt-[8rem] text-[2.4rem] px-[2.4em] py-[0.6em] rounded-4xl text-[#2563eb] bg-[#d6f8df] transition-all hover:scale-125 hover:translate-y-[-2rem] hover:cursor-pointer overflow-hidden relative"
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
            <li className="nav__item nav__item-light text-[4.8rem] dark:text-[#08aa38] text-[#c5164d] translate-y-[10%] ">
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
            <NavbarItem content="Commerce" />
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
        className="section__image mt-[9.6rem] relative h-[80vh] "
      >
        <HeroHeading content="IMAGE CAROUSEL"></HeroHeading>
        <ul className="image__carousel--list mt-[9.6rem] relative h-[120%] flex flex-col items-center ">
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
          className="slider__left absolute left-[5%] top-[70%] visible bg-[#d6f8df] w-[80px] h-[80px] rounded-full aspect-ratio-1 bottom-[-85%] text-[#2563eb] text-[6rem]"
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button
          onClick={() =>
            setImgIndex((imgIndex + 1 + imageData.length) % imageData.length)
          }
          className="slider__right absolute left-[87%] top-[70%] visible bg-[#d6f8df] w-[80px] h-[80px] rounded-full aspect-ratio-1 bottom-[-85%] text-[#2563eb] text-[6rem]"
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </motion.section>
      {console.log(imgIndex)}
    </>
  );
}
function Image({ ImageInfo, index, imgIndex }) {
  console.log(ImageInfo.alt);
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
          alt={ImageInfo.alt}
          className="group-hover:blur-xl group-hover:brightness-60 transition-all duration-500 w-full h-full object-cover"
        />
        <div className="image__information flex flex-col items-center ">
          <p className="project__heading text-[7.2rem] dark:text-[#08aa38]  text-[#c5164d] transition-all duration-500 group-hover:translate-y-[-40rem] uppercase group-hover:cursor-pointer">
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

function CommerceSection() {
  const ref = createRef();
  const isInView = useInView(ref, { threshold: 21 });
  const [filteredItems, setFilteredItems] = useState(itemData);
  const [activeBtn, setActiveBtn] = useState("All"); // default: All

  function filterCategory(category) {
    if (category === "All") {
      setFilteredItems(itemData);
    } else {
      const updatedItems = itemData.filter(
        (item) => item.category === category
      );
      setFilteredItems(updatedItems);
    }
    setActiveBtn(category); // set currently active button
  }

  // helper: dynamic button style
  function getBtnClasses(category) {
    return `
      filter__btn border-2 border-blue-800 rounded-2xl px-[2.4rem] py-[0.8rem] 
      text-[1.6rem] uppercase scale-150 transform transition-all duration-500 cursor-pointer
      ${
        activeBtn === category
          ? "bg-blue-800 text-white"
          : "bg-[#d6f8df] text-black hover:bg-blue-800 hover:text-white"
      }
    `;
  }

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        className="section__commerce mt-[24rem] "
      >
        <HeroHeading content="FILTER" />

        <div className="filter__btns flex items-center justify-center gap-[12.8rem] m-[6.4rem]">
          <button
            onClick={() => filterCategory("Electronics")}
            className={getBtnClasses("Electronics")}
          >
            Electronics
          </button>

          <button
            onClick={() => filterCategory("Fitness")}
            className={getBtnClasses("Fitness")}
          >
            Fitness
          </button>

          <button
            onClick={() => filterCategory("Home")}
            className={getBtnClasses("Home")}
          >
            Home
          </button>

          <button
            onClick={() => filterCategory("All")}
            className={getBtnClasses("All")}
          >
            All
          </button>
        </div>

        <ul className="commerce__list grid grid-cols-4 gap-4 items-center justify-center">
          {filteredItems.map((item) => {
            return (
              <ItemRender
                key={item.name}
                itemHeading={item.name}
                itemInfo={item.explaination}
                itemPrice={item.price}
                itemImg={item.photoName}
                itemAlt={item.alt}
              />
            );
          })}
        </ul>
      </motion.section>
    </>
  );
}
function ItemRender({ itemHeading, itemInfo, itemPrice, itemImg, itemAlt }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40, scale: 0 }} // start invisible & shifted down
      animate={{ opacity: 1, y: 0, scale: 1 }} // fade & slide into place
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }} // hover effect
      className="list-none"
    >
      {" "}
      <div className="commerce__card scale-100 mt-[3.2rem] hover:cursor-pointer max-w-lg mx-auto bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <img
          src={itemImg}
          alt={itemAlt}
          className="w-[200%] h-[18rem] object-contain bg-[#1a1a1a]"
        />
        <div className="p-6">
          <h3 className="text-[3.6rem] font-semibold mb-2 text-[#d6f8df]">
            {itemHeading}
          </h3>
          <p className="text-[1.2rem] text-gray-300 mb-4">{itemInfo}</p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-[#b3f975]">
              {itemPrice}
            </span>
            <span className="text-sm bg-[#08aa38] text-black px-2 py-1 rounded-full">
              In Stock
            </span>
          </div>

          <button className="w-full bg-[#08aa38] hover:bg-[#0c8a2e] text-black font-semibold py-2 rounded-md transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.li>
  );
}
function HeroHeading(props) {
  return (
    <>
      <div className="relative w-full text-center">
        <h1 className="group inline-block text-[7.2rem] transition-all duration-500 hover:text-[#2563eb] hover:scale-110 hover:cursor-pointer tracking-tighter rounded-4xl text-[#d6f8df] relative">
          {props.content}
          <div className="absolute left-1/2 bottom-0 h-[0.4rem] w-[100%] bg-[#2563eb] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2"></div>
        </h1>
      </div>
    </>
  );
}

function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const ref = createRef();
  const isInView = useInView(ref, { threshold: 21 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Review:", review);
    setRating(0);
    setReview("");
  };
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      className="section__review mt-[12rem]  flex items-center justify-center flex-col gap-[12rem]"
    >
      <HeroHeading content="REVIEW" />
      <div className="bg-gray-900 text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md scale-[2] mt-[2.4rem]">
        <div className="flex gap-2 mb-4 justify-center">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={index}
                className={`cursor-pointer text-3xl transition-colors duration-200 ${
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-600 hover:text-blue-400"
                }`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-100"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-200"
          >
            Submit Review
          </button>
        </form>
      </div>
    </motion.section>
  );
}
function FooterSection() {
  return (
    <footer className="mt-[24rem] flex justify-center items-center border-t-4 border-gray-900 ">
      <p className="text-white text-[3.2rem] mt-[2.4rem] ">
        @2025 Raeef Chowdhury
      </p>
    </footer>
  );
}
export default App;
