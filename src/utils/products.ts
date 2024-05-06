import cabarnetSauvignonSide from "../../public/images/cabernet-sauvignon-side.svg";
import cabarnetSauvignon from "../../public/images/cabernet-sauvignon.svg";
import muscatBlancSide from "../../public/images/muscat-blanc-side.svg";
import muscatBlanc from "../../public/images/muscat-blanc.svg";
import vinoCalienteSide from "../../public/images/vino-caliente-side.svg";
import vinoCaliente from "../../public/images/vino-caliente.svg";
import vinoCalienteShowcase from "../../public/images/vino-caliente-showcase.svg";

export const products = [
  {
    id: "cabernet-sauvignon",
    title: "Cabernet Sauvignon",
    generic: "Red Wine",
    link: "/products/cabernet-sauvignon",
    image: cabarnetSauvignon,
    sideImage: cabarnetSauvignonSide,
    showcase: vinoCalienteShowcase,
    pricePerBox: 37.5,
    pricePerBottle: 7.5,
    description:
      "Also know as spiced wine, containing mild alcohol volume, made from red wine along with various natural muling spices. The aging process last 3 months in our special American and French oak barrels; located in a naturally controlled temperature room. It’s got a subtle sweet fruity taste, in dark red colour from grapes.",
  },
  {
    id: "vino-caliente",
    title: "Vino Caliente (Mulled Wine)",
    generic: "Sweet Red Wine",
    link: "/products/vino-caliente",
    image: vinoCaliente,
    sideImage: vinoCalienteSide,
    showcase: vinoCalienteShowcase,
    pricePerBox: 37.5,
    pricePerBottle: 7.5,
    description:
      "Also know as spiced wine, containing mild alcohol volume, made from red wine along with various natural muling spices. The aging process last 3 months in our special American and French oak barrels; located in a naturally controlled temperature room. It’s got a subtle sweet fruity taste, in dark red colour from grapes.",
  },
  {
    id: "muscat-blanc",
    title: "Muscat Blanc",
    generic: "Sweet White Wine",
    link: "/products/muscat-blanc",
    image: muscatBlanc,
    sideImage: muscatBlancSide,
    showcase: vinoCalienteShowcase,
    pricePerBox: 37.5,
    pricePerBottle: 7.5,
    description:
      "Also know as spiced wine, containing mild alcohol volume, made from red wine along with various natural muling spices. The aging process last 3 months in our special American and French oak barrels; located in a naturally controlled temperature room. It’s got a subtle sweet fruity taste, in dark red colour from grapes.",
  },
];
