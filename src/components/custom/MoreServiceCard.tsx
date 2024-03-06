import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  to: string;
}

const MoreServiceCard = ({ description, image, title, to }: Props) => {
  return (
    <div className="flex flex-col w-full shadow-sm p-2">
      <ArrowRight className="text-orange-500 size-7 " />

      <div className="flex gap-3 mt-3">
        <Image
          src={image}
          alt="service"
          width={500}
          height={500}
          className="w-full max-w-[150px] sm:max-w-[250px]"
        />

        <div className="flex flex-col gap-3">
          <h2 className="text-lg sm:text-xl">{title}</h2>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreServiceCard;
