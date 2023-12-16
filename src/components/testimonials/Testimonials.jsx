import React from "react";
import "./testimonials.css";
import Avatar from "../../assets/me.jpg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar,
    name: "Olatunde OKanlawon",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure ex ut asperiores, nemo modi saepe quos, sit dignissimos vel veritatis sed ducimus molestiae itaque fugiat officia assumenda voluptatum omnis.",
  },

  {
    avatar: Avatar,
    name: "Olatunde OKanlawon",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure ex ut asperiores, nemo modi saepe quos, sit dignissimos vel veritatis sed ducimus molestiae itaque fugiat officia assumenda voluptatum omnis.",
  },

  {
    avatar: Avatar,
    name: "Olatunde OKanlawon",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure ex ut asperiores, nemo modi saepe quos, sit dignissimos vel veritatis sed ducimus molestiae itaque fugiat officia assumenda voluptatum omnis.",
  },

  {
    avatar: Avatar,
    name: "Olatunde OKanlawon",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure ex ut asperiores, nemo modi saepe quos, sit dignissimos vel veritatis sed ducimus molestiae itaque fugiat officia assumenda voluptatum omnis.",
  },

  {
    avatar: Avatar,
    name: "Olatunde OKanlawon",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure ex ut asperiores, nemo modi saepe quos, sit dignissimos vel veritatis sed ducimus molestiae itaque fugiat officia assumenda voluptatum omnis.",
  },

  {
    avatar: Avatar,
    name: "Olatunde OKanlawon",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet iure ex ut asperiores, nemo modi saepe quos, sit dignissimos vel veritatis sed ducimus molestiae itaque fugiat officia assumenda voluptatum omnis.",
  },
];

// ...

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
