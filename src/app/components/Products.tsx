import Image from "next/image";
import Link from "next/link";

import { selectProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { Product } from "@/d.types";
import { formatCurrency } from "@/utils/formatCurrency";

const Products = () => {
  const { products } = useAppSelector(selectProduct);

  const dispatch = useAppDispatch();

  return (
    <div className='grid grid-cols-3 gap-5 w-full justify-items-center items-center mx-auto'>
      {products &&
        products.length > 0 &&
        products.map((product: Product, index) => (
          <div
            className='flex space-x-3 bg-[#D9CCB9] justify-center items-center rounded-xl relative w-[400px] h-[200px]'
            key={index}
          >
            <Image
              src={product.image}
              alt={product.title}
              className='absolute bottom-[-1] left-3'
            />
            <div className='flex flex-col space-y-3 z-10'>
              <p className='font-georgia text-[#AF6900] text-[17px] tracking-[.34px] leading-normal'>
                {product.title}
              </p>
              <p className='font-kingstone text-[#211911] text-[20px] tracking-[2px] leading-normal uppercase'>
                {product.generic}
              </p>

              <div className='flex flex-col space-y-2'>
                <p className='font-georgia text-[#211911] text-[17px] font-bold leading-normal'>
                  {formatCurrency(product.pricePerBottle)}
                </p>
                <Link
                  href={product.link}
                  className='font-georgia text-[#AF6900] text-[17px] leading-normal italic'
                  // onClick={() => onSetSelectedProduct(product.title)}
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
        ))}
    </div>
  );
};

export default Products;
