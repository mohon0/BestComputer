import React from "react";
import {
	FaDribbble,
	FaFacebookSquare,
	FaPinterestSquare,
	FaRss,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<footer className="relative">
			
			{/* Contact Cards - Floating Section */}
			<div className="relative -mb-24 flex w-full items-center justify-center px-4 py-12 md:-mb-16 z-10">
				<div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
					{/* Location Card */}
					<div className="group rounded-2xl border border-purple-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 md:p-8">
						<div className="flex flex-col items-center gap-4 text-center">
							<div className="rounded-full bg-purple-100 p-4 transition-transform group-hover:scale-110">
								<FaLocationDot className="text-2xl text-purple-600 md:text-3xl" />
							</div>
							<div>
								<p className="font-semibold text-gray-900 md:text-lg">ঠিকানা</p>
								<p className="mt-2 text-sm text-gray-600 md:text-base">
									রফি টাওয়ার (১০ তলা ভবনের ৫ম তলা) পায়রা চত্ত্বর, ঝিনাইদহ
								</p>
							</div>
						</div>
					</div>

					{/* Phone Card */}
					<div className="group rounded-2xl border border-cyan-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200 md:p-8">
						<div className="flex flex-col items-center gap-4 text-center">
							<div className="rounded-full bg-cyan-100 p-4 transition-transform group-hover:scale-110">
								<MdCall className="text-2xl text-cyan-600 md:text-3xl" />
							</div>
							<div>
								<p className="font-semibold text-gray-900 md:text-lg">মোবাইল</p>
								<div className="mt-2 space-y-1">
									<p className="text-sm text-gray-600 md:text-base">01989491248</p>
									<p className="text-sm text-gray-600 md:text-base">01799-574570</p>
								</div>
							</div>
						</div>
					</div>

					{/* Email Card */}
					<div className="group rounded-2xl border border-purple-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200 md:p-8">
						<div className="flex flex-col items-center gap-4 text-center">
							<div className="rounded-full bg-purple-100 p-4 transition-transform group-hover:scale-110">
								<MdEmail className="text-2xl text-purple-600 md:text-3xl" />
							</div>
							<div>
								<p className="font-semibold text-gray-900 md:text-lg">ই-মেইল</p>
								<div className="mt-2 space-y-1">
									<p className="text-sm text-gray-600 md:text-base">contact@oylkka.com</p>
									<p className="text-sm text-gray-600 md:text-base">freelancermohon01@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Footer */}
			<div 
				className="bg-cover bg-center text-white border-t-4 border-dashed"
				style={{ backgroundImage: 'url(/green.jpg)', backgroundRepeat: "repeat", }}
			>
				<div className="bg-black/40 backdrop-blur-sm">
					{/* Top Section */}
					<div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
						<div className="mb-12 text-center">
							<p className="text-3xl font-bold md:text-5xl">
								ওয়েল্কা ট্রেনিং সেন্টার
							</p>
							<p className="mt-3 text-white/80">
								আপনার ক্যারিয়ারের সেরা সঙ্গী
							</p>
						</div>

						{/* Social Links */}
						<div className="flex justify-center gap-6 md:gap-8">
							<a
								href="#"
								className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-white/20 md:p-4"
								aria-label="Facebook"
							>
								<FaFacebookSquare className="text-lg md:text-xl" />
							</a>
							<a
								href="#"
								className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-white/20 md:p-4"
								aria-label="Dribbble"
							>
								<FaDribbble className="text-lg md:text-xl" />
							</a>
							<a
								href="#"
								className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-white/20 md:p-4"
								aria-label="Pinterest"
							>
								<FaPinterestSquare className="text-lg md:text-xl" />
							</a>
							<a
								href="#"
								className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-white/20 md:p-4"
								aria-label="RSS"
							>
								<FaRss className="text-lg md:text-xl" />
							</a>
						</div>
					</div>

					{/* Divider */}
					<div className="border-t border-white/20"></div>

				{/* Bottom Section */}
				<div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-white/80 md:text-base">
					<p className="text-balance">
						কপিরাইট © 2014 - {new Date().getFullYear()} সর্বসত্ত্ব সংরক্ষিত | ওয়েল্কা ট্রেনিং সেন্টার
					</p>
				</div>
				</div>
			</div>
		</footer>
	);
}
