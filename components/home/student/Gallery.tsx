"use client";
import img1 from "@/assets/gallery/1.jpg";
import img2 from "@/assets/gallery/2.jpg";
import img3 from "@/assets/gallery/3.jpg";
import img4 from "@/assets/gallery/4.jpg";
import img5 from "@/assets/gallery/5.jpg";
import img6 from "@/assets/gallery/6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Gallery() {
	return (
		<div className="space-y-4">
			<div className="text-center text-3xl font-bold text-primary-100">
				গ্যালারি
			</div>
			<Swiper
				breakpoints={{
					340: {
						slidesPerView: 2,
						spaceBetween: 4,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 4,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 6,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 6,
					},
				}}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image src={img1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img3} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img4} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img5} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img6} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
