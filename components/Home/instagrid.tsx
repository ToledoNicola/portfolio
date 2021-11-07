import { FunctionComponent } from "react";
import Image from "next/image";
import f1 from "public/insta/anima.jpg";
import f2 from "public/insta/bluesa.jpg";
import f3 from "public/insta/nice.jpg";
import f4 from "public/insta/red.jpg";
import f5 from "public/insta/sa.jpg";
import f6 from "public/insta/tai.jpg";
import f7 from "public/insta/tai2.jpg";
import f8 from "public/insta/taiwater.jpg";
import f9 from "public/insta/tok.jpg";
interface InstaGridProps {}

export const InstaGrid: FunctionComponent<InstaGridProps> = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-10 sm:gap-20 md:gap-32 ">
      <InstaImge img={f1} />
      <InstaImge img={f2} />
      <InstaImge img={f3} />
      <InstaImge img={f4} />
      <InstaImge img={f5} />
      <InstaImge img={f6} />
      <InstaImge img={f7} />
      <InstaImge img={f8} />
      <InstaImge img={f9} />
    </div>
  );
};

interface instaImgeProps {
  img: StaticImageData;
}

const InstaImge: FunctionComponent<instaImgeProps> = ({ img }) => {
  return (
    <div className="relative  w-auto h-96 hover:scale-105 hover:rotate-2 transition duration-200  shadow-xl rounded-3xl">
      <Image
        className="rounded-3xl "
        src={img}
        layout="fill"
        placeholder="blur"
        alt="foto insta"
        objectFit="cover"
      />
    </div>
  );
};
