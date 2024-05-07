"use client";
import {
  selectProduct,
  setSelectedProduct,
} from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const Product = ({ params }: { params: { product: string } }) => {
  const { selectedProduct }: any = useAppSelector(selectProduct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedProduct(params.product));
  }, [dispatch]);

  return (
    <div className='min-w-screen w-screen h-auto flex justify-center items-center dark:bg-custom-dark bg-custom-light py-10 lg:py-20 bg-background-illustration bg-cover bg-center bg-no-repeat'>
      <div className='w-full h-auto px-5 lg:px-[74px]'>
        {selectedProduct ? (
          <div className='w-full h-auto flex flex-col space-y-20'>
            <div className='flex space-x-2 items-center'>
              <Link
                href='/'
                className='font-gill-sans text-[16px] dark:text-custom-light text-custom-dark font-semibold tracking-[.32px]'
              >
                Home
              </Link>
              <p className='font-gill-sans text-[16px] dark:text-custom-light text-custom-dark font-semibold tracking-[.32px]'>
                /
              </p>
              <p className='font-gill-sans text-[16px] text-[#AF6900] font-semibold tracking-[.32px] underline'>
                Details
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-10 px-0 lg:px-20 items-center'>
              <div className='w-full col-span-3 order-2 lg:order-1 flex justify-center scale-[.75]'>
                <Image
                  src={selectedProduct && selectedProduct.showcase}
                  alt={selectedProduct && selectedProduct.title}
                  className=''
                />
              </div>
              <div className='flex flex-col space-y-10 lg:space-y-20 col-span-7 order-1 lg:order-2'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='font-gill-sans text-[24px] lg:text-[48px] text-[#AF6900] lg:tracking-[.96px]'>
                    Product - {selectedProduct && selectedProduct.title}
                  </h1>
                  <p className='font-kingstone text-[#A5886D] text [22px] lg:text-[32px] lg:tracking-[.64px]'>
                    Don Alvaro {selectedProduct && selectedProduct.generic}
                  </p>
                </div>
                <div className='flex flex-col space-y-5'>
                  <p className='font-georgia dark:text-custom-light text-custom-dark text-[16px] lg:text-[24px] l;leading-[24px] lg:leading-[32px] lg:tracking-[.48px] w-full lg:w-[90%]'>
                    {selectedProduct && selectedProduct.description}
                  </p>
                  <div className='flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-start lg:items-center'>
                    <div className='flex space-x-3 items-center'>
                      <p className='font-georgia dark:text-custom-light text-custom-dark text-[16px] lg:text-[24px] lg:leading-[32px] lg:tracking-[.48px]'>
                        Price per bottle:
                      </p>
                      <p className='font-georgia text-[#AF6900] text-[24px] lg:text-[32px] leading-normal font-bold'>
                        {selectedProduct &&
                          formatCurrency(selectedProduct.pricePerBottle)}
                      </p>
                    </div>
                    <div className='flex space-x-3 items-center'>
                      <p className='font-georgia dark:text-custom-light text-custom-dark text[16px] lg:text-[24px] lg:leading-[32px] lg:tracking-[.48px]'>
                        Price per box:
                      </p>
                      <p className='font-georgia text-[#AF6900] text-[24px] lg:text-[32px] leading-normal font-bold'>
                        {selectedProduct &&
                          formatCurrency(selectedProduct.pricePerBox)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className='font-georgia text-[#AF6900] text-[24px] leading-normal font-medium tracking-wider'>
            No product selected
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
