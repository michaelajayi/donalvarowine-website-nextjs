import Image from "next/image";
import React from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import logo from "../../../public/logo-dark.svg";

const WhatsappComponent = () => {
  return (
    <div className='z-50 overflow-x-hidden w-full lg:w-screen'>
      <WhatsAppWidget
        phoneNumber='+447413817599'
        message='Hello! 👋🏼 What can we do for you?'
        CompanyIcon={() => <Image src={logo} alt='company logo' />}
        companyName='Don Álvaro'
        allowExit
        position='right'
        autoOpen={false}
        darkMode
      />
    </div>
  );
};

export default WhatsappComponent;
