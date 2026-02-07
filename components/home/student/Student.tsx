import FeedBack from "./FeedBack";
import Gallery from "./Gallery";

export default function Student() {
  return (
    <div className="mx-2 my-16 grid grid-cols-1 gap-10 md:gap-20 md:mx-24 md:grid-cols-2">
      <FeedBack />
      <Gallery />
    </div>
  );
}
