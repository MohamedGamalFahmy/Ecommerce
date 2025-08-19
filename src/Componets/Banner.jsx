import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 

// import required modules
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { bannerImgFive, bannerImgFour, bannerImgOne, bannerImgThree, bannerImgTwo } from '../assets';

const Banner = () => {
  const banner = [
    { id: '1', image: bannerImgOne },
    { id: '2', image: bannerImgTwo },
    { id: '3', image: bannerImgThree },
    { id: '4', image: bannerImgFour },
    { id: '5', image: bannerImgFive },
  ];

  return (
    <section className="grid grid-cols-1 my-15">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade" 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]} 
        className="mySwiper grid grid-cols-1 mt-10"
      >
        {banner.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt=""
              className="pt-14 w-full h-[400px] sml:h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
