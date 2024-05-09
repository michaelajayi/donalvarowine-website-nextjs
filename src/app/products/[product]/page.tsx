"use client";
import {
  selectProduct,
  setSelectedProduct,
} from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

import WhatsappComponent from "@/app/components/WhatsappComponent";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

import starRating from "../../../../public/icons/star-ratings.svg";

import { addToCart } from "@/lib/features/cart/cartSlice";
import toast from "react-hot-toast";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { selectLayout } from "@/lib/features/layout/layoutSlice";

const Product = ({ params }: { params: { product: string } }) => {
  const { selectedProduct }: any = useAppSelector(selectProduct);
  const { isDarkMode } = useAppSelector(selectLayout);

  const dispatch = useAppDispatch();

  const [bottleQty, setBottleQty] = useState(0);
  const [boxQty, setBoxQty] = useState(0);

  const increaseBottleQty = () => {
    setBottleQty(bottleQty + 1);
  };

  const decreaseBottleQty = () => {
    if (bottleQty > 0) {
      setBottleQty(bottleQty - 1);
    }
  };

  const increaseBoxQty = () => {
    setBoxQty(boxQty + 1);
  };

  const decreaseBoxQty = () => {
    if (boxQty > 0) {
      setBoxQty(boxQty - 1);
    }
  };

  const onAddToCart = () => {
    if (boxQty === 0 && bottleQty === 0)
      return toast.error("Please select a quantity!");
    else {
      const addToCartPayload = {
        product: selectedProduct,
        bottleQty,
        boxQty,
        totalPricePerBox: selectedProduct.pricePerBox * boxQty,
        totalPricePerBottle: selectedProduct.pricePerBottle * bottleQty,
      };

      dispatch(addToCart(addToCartPayload));
    }
  };

  useEffect(() => {
    dispatch(setSelectedProduct(params.product));
  }, [dispatch, params.product]);

  return (
    <div className='min-w-screen w-screen h-auto flex justify-center items-center dark:bg-custom-dark bg-custom-light py-10 lg:py-20 bg-background-illustration bg-cover bg-center bg-no-repeat relative'>
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
              <div className='w-full col-span-3 order-2 lg:order-1 flex justify-center lg:scale-[1.5]'>
                <Image
                  src={selectedProduct && selectedProduct.image}
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
                  <div className='flex flex-col space-y-5'>
                    <p className='font-georgia dark:text-custom-light text-custom-dark text-[16px] lg:text-[24px] l;leading-[24px] lg:leading-[32px] lg:tracking-[.48px] w-full lg:w-[90%]'>
                      {selectedProduct && selectedProduct.description}
                    </p>
                    <Image
                      src={starRating}
                      alt='star rating'
                      className='pointer-events-none'
                    />
                  </div>
                  <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-start lg:items-center'>
                      <div className='flex flex-col space-y-8'>
                        <div className='flex space-x-3 items-center'>
                          <p className='font-georgia dark:text-custom-light text-custom-dark text-[16px] lg:text-[24px] lg:leading-[32px] lg:tracking-[.48px]'>
                            Price per bottle:
                          </p>
                          <p className='font-georgia text-[#AF6900] text-[24px] lg:text-[32px] leading-normal font-bold'>
                            {selectedProduct &&
                              formatCurrency(selectedProduct.pricePerBottle)}
                          </p>
                        </div>
                        <div className='flex items-center space-x-5'>
                          <div
                            className='w-10 h-10 aspect-[1/1] grid place-content-center border border-[#AF6900] text-white cursor-pointer'
                            onClick={increaseBottleQty}
                          >
                            <AiOutlinePlus
                              color={isDarkMode ? "#fff" : "#000"}
                            />
                          </div>
                          <p className={`font-georgia text-[20px] leading-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {bottleQty}
                          </p>
                          <div
                            className='w-10 h-10 aspect-[1/1] grid place-content-center border border-[#AF6900] text-white cursor-pointer'
                            onClick={decreaseBottleQty}
                          >
                            <AiOutlineMinus
                              color={isDarkMode ? "#fff" : "#000"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col space-y-8'>
                        <div className='flex space-x-3 items-center'>
                          <p className='font-georgia dark:text-custom-light text-custom-dark text[16px] lg:text-[24px] lg:leading-[32px] lg:tracking-[.48px]'>
                            Price per box:
                          </p>
                          <p className='font-georgia text-[#AF6900] text-[24px] lg:text-[32px] leading-normal font-bold'>
                            {selectedProduct &&
                              formatCurrency(selectedProduct.pricePerBox)}
                          </p>
                        </div>
                        <div className='flex items-center space-x-5'>
                          <div
                            className='w-10 h-10 aspect-[1/1] grid place-content-center border border-[#AF6900] text-white cursor-pointer'
                            onClick={increaseBoxQty}
                          >
                            <AiOutlinePlus
                              color={isDarkMode ? "#fff" : "#000"}
                            />
                          </div>
                          <p className={`font-georgia text-[20px] leading-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {boxQty}
                          </p>
                          <div
                            className='w-10 h-10 aspect-[1/1] grid place-content-center border border-[#AF6900] text-white cursor-pointer'
                            onClick={decreaseBoxQty}
                          >
                            <AiOutlineMinus
                              color={isDarkMode ? "#fff" : "#000"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className='font-georgia text-white text-[16px] leading-normal bg-[#AF6900] py-3 rounded-[4px]'
                      // disabled={boxQty === 0 && bottleQty === 0}
                      onClick={onAddToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className='flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-start lg:items-center'></div>
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
      <div
        className='absolute bottom-0 right-0 w-screen h-auto overflow-x-hidden'
        style={{ zIndex: 50 }}
      >
        <WhatsappComponent />
      </div>
    </div>
  );
};

export default Product;
