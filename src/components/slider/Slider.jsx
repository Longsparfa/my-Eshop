import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };

  return (
    <div className="w-[100%] h-[90vh] relative overflow-hidden bg-[#242424] ">
      <AiOutlineArrowLeft
        className="border-solid border-[2px] border-[#00a35c] rounded-[50%] bg-transparent text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#fff] left-[1.5rem] text-[#00a35c] "
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="border-solid border-[2px] border-[#00a35c] rounded-[50%] bg-transparent text-white w-[2.5rem] h-[2.5rem] cursor-pointer absolute top-[50%] translate-y-[50%] z-[2] hover:bg-[#fff] right-[1.5rem] text-[#00a35c] "
        onClick={nextSlide}
      />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={
              index === currentSlide
                ? "absolute top-0 left-0 w-[100%] h-[100%] -translate-x-[50%] transition ease delay-0.5s opacity-1 translate-x-0"
                : "absolute top-0 left-0 w-[100%] h-[100%] opacity-0 -translate-x-[50%] transition ease delay-0.5s"
            }
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" className="w-[100%] h-[100%] " />
                <div className="absolute text-center top-[23rem] left-[50%] opacity-0 w-[50%] p-[3rem] flex justify-self-center items-center flex-col -translate-x-[50%] sm:w-[80%] bg-[rgba(0,0,0,0.4)] animate-[slideUp_1s_ease_0.5s] fill-mode-forwards text-white mb-[1rem] opacity-1 ">
                  <h2 className="text-[4.5rem]">{heading}</h2>
                  <p>{desc}</p>
                  <hr className="h-[2px] bg-white w-[50%] " />
                  <a href="#product" className="text-white bg-[#007bff] ">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
