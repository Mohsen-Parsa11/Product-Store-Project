import Footer from "@/components/Footer";
import ProductsCard from "@/components/ProductsCard";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Slider />
      <ProductsCard />
      <Testimonials />
      <Footer />
    </div>
  );
}
