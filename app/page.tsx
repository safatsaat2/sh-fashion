import { Banner } from "./components/home/Banner";
import BrandWork from "./components/home/BrandWork";
import {Category} from "./components/home/Category";
import MensCardSection from "./components/home/MensCardSection";
import WomensCardSection from "./components/home/WomensCardSection";

export default function Home() {
  return (
    <>
    <Banner/>
    <Category/>
    <BrandWork/>
    <WomensCardSection name={"popat"} />
    <MensCardSection name={"popat"} />
    </>
  )
}
