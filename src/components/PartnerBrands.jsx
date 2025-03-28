import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

const partners = [
  "Starbucks Coffee",
  "Tim Hortons",
  "Peets Coffee",
  "Lavazza",
  "Nespresso",
  "Krispy Kreme",
  "Caribou Coffee",
  "Costa Coffee",
];

const PartnerBrands = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setSlidesPerView(5);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      grid={{
        rows: 1,
      }}
      loop={true}
      spaceBetween={30}
      modules={[Grid]}
      className="p-40  my-20 sm:mt-25 lg:mt-10"
    >
      {partners.map((brand, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#1F2A26] flex items-center justify-center h-50 p-10 rounded-xl">
            <img
              src={`/partners/${brand}.svg`}
              alt={brand}
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnerBrands;
