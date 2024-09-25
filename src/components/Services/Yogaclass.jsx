import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Example Yoga Images - Replace with your actual image URLs or import them.
const yogaImages = [
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-21.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-29-1.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
  "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-20.png",
];

const YogaClasses = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      {/* Header Section */}
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
          {/* Title and Text */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Yoga Classes
            </h1>
            <p className="text-lg text-gray-600">
              Experience the beauty of yoga tailored just for you in our private
              sessions, or join our vibrant community in our energizing group
              classes. Whether you prefer personalized attention or the
              camaraderie of practicing together, our expert instructors guide
              you through every pose, breath, and meditation, fostering growth,
              strength, and inner peace. Discover the perfect session for you
              and join us on the mat at Aadi Yoga Center.
            </p>
          </div>

          {/* Main Image */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
              alt="Yoga Classes"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </div>
        </div>

        {/* Private & Group Yoga Sessions with Carousel */}
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-8">
          {/* Text Section */}
          {/* <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Private & Group Yoga Sessions
            </h2>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <span className="text-3xl text-gray-600">⚜️</span>
            </div>
          </div> */}

          {/* Swiper Carousel for Images */}
          <div className="lg:w-2/3">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                // When the screen is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // When the screen is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // When the screen is >= 1024px
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {yogaImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full">
                    <img
                      src={image}
                      alt={`Yoga Session ${index + 1}`}
                      className="rounded-lg shadow-lg object-cover w-full h-72"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default YogaClasses;
