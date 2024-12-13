import Image from "next/image";
import TopHeader from "./components/header";
import Header from "./components/navbar";
import HeroSection from "./components/hero";
import ProductGrid from "./components/productgrid";
import CategoriesSection from "./components/categorries";
import ProductSelling from "./components/product selling";
import Footer from "./components/footer";
import Music from "./components/music";
import ExploreProducts from "./components/exploreproducts";
import DeliveryService from "./components/deliveryservirce";
import FeatureSection from "./components/feature";
import About from "./About/page";

export default function Home() {
  return(
    <div>
      {/* <TopHeader />
      <Header /> */}
      <HeroSection />
      <ProductGrid />
      <CategoriesSection />
      <ProductSelling />
      <Music />
      <ExploreProducts />
      <FeatureSection />
      <DeliveryService />
      {/* <Footer /> */}
    </div>
  )
}