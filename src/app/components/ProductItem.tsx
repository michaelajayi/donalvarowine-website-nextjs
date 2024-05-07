import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { formatCurrency } from "@/utils/formatCurrency";

import { Product } from "@/d.types";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      className='flex space-x-3 bg-[#D9CCB9] justify-center items-center rounded-xl w-[360px] lg:w-auto h-auto py-5 lg:py-10 ml-3 lg:ml-0 relative parent-div'
      style={{ zIndex: 1 }}
    >
      <div className='w-full h-fit absolute top-0 left-3' style={{ zIndex: 2 }}>
        <Image
          src={product.image}
          alt={product.title}
          className=' bottom-[-1] left-3'
          style={{ zIndex: 3 }}
        />
      </div>
      <div className='flex flex-col space-y-3 pl-8 lg:pl-0'>
        <p className='font-georgia text-[#AF6900] text-[17px] tracking-[.34px] leading-normal'>
          {product.title}
        </p>
        <p className='font-kingstone text-[#211911] text-[20px] tracking-[2px] leading-normal uppercase'>
          {product.generic}
      </p>

        <div className='flex flex-col space-y-2 z-10'>
          <p className='font-georgia text-[#211911] text-[17px] font-bold leading-normal'>
            {formatCurrency(product.pricePerBottle)}
          </p>
          <Link
            href={product.link}
            className='font-georgia text-[#AF6900] text-[17px] leading-normal italic'
          >
            View Details
          </Link>
        </div>
      </div>
      <Image
        src={product.sideImage}
        alt={product.title}
        className='absolute bottom-0 right-0'
      />
    </div>
  );
};

export default ProductItem;
