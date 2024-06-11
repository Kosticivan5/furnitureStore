import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages: string[] = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="capitalize max-w-2xl text-4xl font-bold tracking-wide sm:text-6xl">
          experience a new way of shopping
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, nulla? Eos vel magni saepe ea error a culpa dicta
          deserunt?
        </p>
        <div className="mt-10">
          <Link to="/products" className="capitalize btn btn-primary">
            our products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((img: string, i: number) => {
          return (
            <div key={i} className="carousel-item">
              <img src={img} className="rounded-box h-full w-80 object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
