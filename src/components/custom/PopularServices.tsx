import clsx from "clsx";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  price: number;
  image: string;
  to: string;
  rating: number;
}

const PopularServices = ({
  price,
  rating,
  description,
  image,
  title,
  to,
}: Props) => {
  const filled = Array.from({ length: rating }, (_, index) => index);
  const empty = Array.from({ length: 3 - rating }, (_, index) => index);

  return (
    <div className="p-3 flex flex-col bg-white w-fit rounded-md">
      <div className="relative rounded-md">
        <Image
          className=" aspect-square rounded-md"
          src={image}
          alt="image"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-3 ms:pl-8">
          <h3 className="font-bold text-white text-lg sm:text-xl">{title}</h3>
          <p className="text-white text-xs sm:text-base">{description}</p>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-sm mt-3">Starting from</h4>
        <div className="flex justify-between">
          <p className="text-sm font-medium">{price}</p>

          <div className="flex">
            {empty.map((i) => (
              <Heart key={i} className="size-5  text-orange-400" />
            ))}
            {filled.map((i) => (
              <Heart
                key={i}
                className="size-5 text-orange-400 fill-orange-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
