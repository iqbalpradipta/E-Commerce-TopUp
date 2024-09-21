import { Box, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../style/index.css";

import { Pagination } from "swiper/modules";

function Game() {
  return (
    <>
      <Box
        border="1px solid #FFEED9"
        boxShadow="4px 12px 29px -12px rgba(0,0,0,0.75)"
        bgColor="#87C4FF"
        ml="auto"
        mr="auto"
        w="90%"
        height="50%"
        mt="30px"
        borderRadius="lg"
      >
        <Text
          textColor="black"
          fontSize="2xl"
          ms="20px"
          fontWeight="bold"
          p="10px"
        >
          🔥 Game
        </Text>
        <Text
          textColor="#6c6869"
          as="sup"
          fontSize="sm"
          ms="20px"
          fontWeight="bold"
          p="10px"
        >
          List Game Available
        </Text>
        <Box w="100%" h="250px">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default Game;
