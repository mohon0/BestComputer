import { Link } from "gatsby";
import React from "react";
import img1 from "../../../../images/bg_notice_board.png";
import AnimatedButton from "./AnimatedButton";



const Notice: React.FC = () => {
  

  return (
    <div className="mx-2 my-10 grid grid-cols-1 gap-10 md:mx-20 md:grid-cols-2">
      <div className="flex gap-10 overflow-hidden border bg-gradient-to-b from-gray-50 to-gray-200">
        <img
          src={img1}
          alt="Notice Board Background"
          className="hidden h-fit w-24 md:block"
        />
        <div className="px-2 py-3 md:py-6">
          <p className="text-xl font-bold">নোটিশ বোর্ড</p>
          <div className="p-2">
            <div className="flex items-center justify-end">
              <Link
                to="https://www.it.oylkka.com/best-computer-training-center/notice"
                className="rounded border border-primary-100 px-3 py-1"
                target="__blank"
              >
              সকল নোটিশ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <AnimatedButton />
      </div>
    </div>
  );
};

export default Notice;
