"use client";
import img2 from "@/assets/workplace/fff.png";
import img1 from "@/assets/workplace/fiverr.png";
import img3 from "@/assets/workplace/toptal.png";
import img4 from "@/assets/workplace/upwork.png";
import img5 from "@/assets/workplace/youtube.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
// import required modules
import SectionHeader from "@/components/animation/SectionHeader";

export default function WorkPlace() {
	return (
		<div className="mx-2 space-y-4 md:mx-20">
			<SectionHeader
				title="ছাত্রদের কর্মক্ষেত্র"
				text="আপনি যদি সম্পূর্ণরূপে কাজ শিখে নিজেকে দক্ষ ভাবে তৈরি করতে পারেন তাহলে অবশ্যই বিভিন্ন মার্কেটপ্লেস এ কাজ করতে পারবেন।"
				icon={FaHandHoldingDollar}
			/>
			<Swiper
				breakpoints={{
					340: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
				}}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="my-auto flex items-center justify-center"
			>
				<SwiperSlide className="flex h-full items-center justify-center">
					<Image
						src={img1}
						alt=""
						className="flex h-16 w-full items-center justify-center object-scale-down"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex h-full items-center justify-center">
					<Image
						src={img2}
						alt=""
						className="flex h-16 w-full items-center justify-center object-scale-down"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex h-full items-center justify-center">
					<Image
						src={img3}
						alt=""
						className="flex h-12 w-full items-center justify-center object-scale-down"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex h-full items-center justify-center">
					<Image
						src={img4}
						alt=""
						className="flex h-12 w-full items-center justify-center object-scale-down"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex h-full items-center justify-center">
					<Image
						src={img5}
						alt=""
						className="flex h-12 w-full items-center justify-center object-scale-down"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
