import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  count: number;
  image1: string;
  image2: string;
  to: string;
}

const CategoryCard = ({ count, image1, image2, title, to }: Props) => {
  return (
    <Link
      href={to}
      className="  rounded-md border-2 border-orange-500 p-2 shadow-md"
    >
      <div className="flex w-full gap-1">
        <Image
          src={image1}
          alt="img"
          width={100}
          height={100}
          className="w-[50%]"
        />
        <Image
          src={image1}
          alt="img"
          width={100}
          height={100}
          className="w-[50%]"
        />
      </div>
      <div className=" text-xs sm:text-sm flex justify-between my-2 font-medium items-center">
        <p>{title}</p>

        <span className="p-1 px-2 rounded-lg bg-yellow-500">{count}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
