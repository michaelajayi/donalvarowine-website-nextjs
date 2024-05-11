"use client";
import { clearCart, selectCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";
import WhatsappComponent from "../components/WhatsappComponent";
import CartItem from "./CartItem";

import { CartItems } from "@/d.types";
import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import toast from "react-hot-toast";

const Page = () => {
  const { cartItems } = useAppSelector(selectCart);
  const { isDarkMode } = useAppSelector(selectLayout);

  const dispatch = useAppDispatch();

  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.bottleQty * item.product.pricePerBottle;
    });

    return total;
  };

  const generateOrderSummary = () => {
    let orderSummary = "Order Summary for Don Alvaro:\n\n";
    orderSummary += "Items:\n";

    cartItems.forEach((item) => {
      orderSummary += `- ${item.product.title} - Quantity: ${
        item.bottleQty
      } bottles, Price: £${(
        item.product.pricePerBottle * item.bottleQty
      ).toFixed(2)}\n`;
    });

    const total = cartItems.reduce(
      (acc, item) => acc + item.product.pricePerBottle * item.bottleQty,
      0
    );

    orderSummary += `\nTotal: £${total.toFixed(2)}`;

    return orderSummary;
  };

  const sendMessage = () => {
    const orderSummary = generateOrderSummary();

    const whatsappUrl = `https://wa.me/447413817599?text=${encodeURIComponent(
      orderSummary
    )}`;

    toast.success("Order completed successfully!");

    window.open(whatsappUrl, "_blank");

    dispatch(clearCart());
  };

  return (
    <div className={`min-h-[55vh] w-screen h-auto flex justify-center items-start dark:bg-custom-dark bg-custom-light py-10 lg:py-20 bg-background-illustration bg-cover bg-center bg-no-repeat relative`}>
      <div className='w-full h-auto px-5 lg:px-[74px] flex-col space-y-20'>
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
            Cart
          </p>
        </div>

        <div className='px-0 lg:px-20 flex flex-col space-y-5'>
          {cartItems.length > 0 ? (
            cartItems.map((cart, index) => <CartItem cart={cart} key={index} />)
          ) : (
            <p className='font-georgia text-[#AF6900] text-[24px] leading-normal font-medium tracking-wider'>
              No items in cart
            </p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className='w-full h-auto flex justify-end items-center flex-col px-0 lg:px-20 space-y-5'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-20'>
              <div className='col-span-4 flex justify-start lg:justify-end'>
                <p
                  className={`font-georgia text-[18px] lg:text-[24px] leading-[32px] tracking-[.48px] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Sub total
                </p>
              </div>
              <div className='flex flex-col space-y-5 col-span-6'>
                <div className='flex flex-col space-y-5'>
                  {cartItems.map((cart, index) => (
                    <div
                      className='flex justify-between items-center space-x-20'
                      key={index}
                    >
                      <p className='font-gill-sans text-[#AF6900] text-[16px] lg:text-[24px] tracking-[.48px]'>
                        {cart.product.title}
                      </p>
                      <p className='font-georgia text-[#AF6900] text-[22px] lg:text-[26.828px] font-bold leading-normal'>
                        {formatCurrency(
                          cart.bottleQty * cart.product.pricePerBottle
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='flex justify-between items-center'>
                  <p
                    className={`font-gill-sans text-white text-[16px] lg:text-[24px] tracking-[.48px] uppercase ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Total
                  </p>
                  <p
                    className={`font-georgia text-[22px] lg:text-[26.828px] font-bold leading-normal ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {formatCurrency(calculateTotal())}
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-20'>
              <div className='col-span-4'></div>
              <div className='col-span-6 flex justify-start'>
                <button
                  className={`w-full font-georgia text-[16px] bg-[#AF6900] py-3 rounded-[4px] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  onClick={sendMessage}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
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

export default Page;
