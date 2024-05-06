import Image from "next/image";
import React from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import logo from "../../../public/logo-dark.svg";


const WhatsappComponent = () => {
  return (
    <WhatsAppWidget
      phoneNumber='+2347032535900' // Replace with your desired phone number
      message='Hello! 👋🏼 What can we do for you?' // Customize the initial message
      CompanyIcon={() => <Image src={logo} alt='company logo' />} // Replace with your company logo
      companyName='Don Álvaro' // Replace with your company name
      allowExit // Allow users to close the widget
      position='right' // Position of the widget on the screen
      autoOpen={false} // Disable the auto-open behavior
      darkMode // Enable dark mode
    />
  );
};

export default WhatsappComponent;
