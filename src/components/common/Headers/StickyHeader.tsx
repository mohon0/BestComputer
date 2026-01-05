import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import img from "../../../images/green.jpg";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function StickyHeader() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isVisible =
				currentScrollPos > 250 &&
				(prevScrollPos > currentScrollPos || currentScrollPos < 250);

			setPrevScrollPos(currentScrollPos);
			setVisible(isVisible);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<div
			className={`top-50 fixed z-50 w-full transform space-y-4 border-b-2 border-dashed px-2 py-2 transition-all duration-300 ${
				visible ? "translate-y-0" : "-translate-y-24"
			}`}
			style={{
				backgroundImage: `url(${img})`,
				backgroundRepeat: "repeat",
			}}
		>
			<div className="mx-auto px-2 md:px-10">
				<div className="flex items-center justify-between">
					<Link
						to="/"
						className="font-loveYa text-lg font-bold text-white md:text-3xl"
					>
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
