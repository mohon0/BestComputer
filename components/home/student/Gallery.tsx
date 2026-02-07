import Image from "next/image";
import img1 from "@/assets/gallery/1.jpg";
import img2 from "@/assets/gallery/2.jpg";
import img3 from "@/assets/gallery/3.jpg";
import img4 from "@/assets/gallery/4.jpg";
import img5 from "@/assets/gallery/5.jpg";
import img6 from "@/assets/gallery/6.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  return (
    <div className="space-y-4">
      <div className="text-primary-100 text-center text-3xl font-bold">
        গ্যালারি
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-2/3 md:basis-1/3">
            <Image src={img1} alt="" />
          </CarouselItem>
          <CarouselItem className="basis-2/3 md:basis-1/3">
            <Image src={img2} alt="" />
          </CarouselItem>
          <CarouselItem className="basis-2/3 md:basis-1/3">
            <Image src={img3} alt="" />
          </CarouselItem>
          <CarouselItem className="basis-2/3 md:basis-1/3">
            <Image src={img4} alt="" />
          </CarouselItem>
          <CarouselItem className="basis-2/3 md:basis-1/3">
            <Image src={img5} alt="" />
          </CarouselItem>
          <CarouselItem className="basis-2/3 md:basis-1/3">
            <Image src={img6} alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="translate-x-8" />
        <CarouselNext className="-translate-x-8" />
      </Carousel>
    </div>
  );
}
