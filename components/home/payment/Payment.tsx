import Image from "next/image";
import img from "@/assets/payment/BKash-bKash-Logo.wine.png";
import img1 from "@/assets/payment/Nagad-Logo.wine.png";

export default function Payment() {
  return (
    <div className="mx-2 my-20 space-y-2 md:mx-60">
      <div className="text-center text-3xl font-bold text-primary-100 md:text-4xl">
        মোবাইল পেমেন্ট
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-20">
        <div className="flex flex-col items-center justify-center">
          <Image src={img} alt="bkash" className="w-40" />
          <p className="-mt-4">০১৭৯৯-৫৭৪৫৭০ (পার্সোনাল)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={img1} alt="nagad" className="w-40" />
          <p className="-mt-4">০১৭৯৯-৫৭৪৫৭০ (পার্সোনাল)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={img} alt="bkash-image" className="w-40" />
          <p className="-mt-4">০১৭৭৯-১২০০২৩ (মার্চেন্ট)</p>
        </div>
      </div>
    </div>
  );
}
