import { Link } from "gatsby";
import React from "react";
import img from "../../../images/green.jpg";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function MainHeader() {
	return (
		<div
			className="z-50 border-b-2 border-dashed px-2 py-2 md:px-20"
			style={{
				backgroundImage: `url(${img})`,
				backgroundRepeat: "repeat",
				zIndex: 0,
			}}
		>
			<div className="mx-auto">
				<div className="item-center text-xs font-thin text-gray-200 md:justify-start">
					যোগাযোগ +8801989-491248
				</div>
				<div className="flex items-center justify-between">
					<Link to="/" className="text-lg font-bold text-white md:text-3xl">
						ওয়েল্কা ট্রেনিং সেন্টার
					</Link>
					<div className="hidden items-center gap-2 md:flex">
						<Navigation />
					</div>
					<Menu />
				</div>
			</div>
		</div>
	);
}
