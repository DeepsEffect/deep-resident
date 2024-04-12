// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 4000 }}
      className="mySwiper lg:rounded-xl mt-6 lg:mt-4"
    >
      <SwiperSlide className="">
        <img
          src={
            "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
        />
        <div className="absolute text-white  bottom-10 left-10 text-left w-1/3 animate__animated animate__delay-5s animate__fadeInDown animate__slower animate__infinite">
          <h2 className="font-bold text-2xl">Cozy Family Home</h2>
          <p className="text-base">
            Discover your perfect family retreat, complete with spacious living
            areas and a backyard for unforgettable moments.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={
            "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
        />
        <div className="absolute text-white  bottom-10 left-10 text-left w-1/3 animate__animated animate__delay-5s animate__fadeInDown animate__slower animate__infinite">
          <h2 className="font-bold text-2xl">Charming Townhouse</h2>
          <p className="text-base">
            Experience the allure of townhouse living, blending timeless
            elegance with contemporary comfort in the heart of the city.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
        />
        <div className="absolute text-white  bottom-10 left-10 text-left w-1/3 animate__animated animate__delay-5s animate__fadeInDown animate__slower animate__infinite">
          <h2 className="font-bold text-2xl">Vacation Rental Getaway</h2>
          <p className="text-base">
            Indulge in the ultimate vacation experience with our stunning rental
            properties, offering breathtaking views and luxurious amenities.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
