import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/index.css";
import bannerHome from "../mocks/bannerHome.json";

function Banner() {
  return (
    <>
      <Box bgColor='#87C4FF' w='1200px' minHeight='550px' maxHeight='100%' ms='40px' borderRadius="0px 0px 15px 15px">
        <Box
          h="80vh"
          p="30px"
          w="90vw"
          maxWidth="fit-content"
          ml="auto"
          mr="auto"
          color="black"
        >
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            style={{
              border: "1px solid #87C4FF",
              borderRadius: "10px",
              boxShadow: "30px 10px 35px -10px #87C4FF",
            }}
          >
            {bannerHome.map((data) => (
              <SwiperSlide>
                <Image objectFit='inherit' src={data.image} alt="banner asset" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default Banner;
