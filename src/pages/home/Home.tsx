import ProductList from "../../components/Product/ProductList.tsx";
import Container from "../../layouts/Container.tsx";
import { typography } from "../../styles/global.ts";
import homeBanner from "../../assets/banner/ksenia-yakovleva-BygEl7uekRg-unsplash.jpg";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-full ">
          <img
            className="w-full h-full object-cover"
            src={homeBanner}
            alt="banner image"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>
      <Container className="pt-10 md:pt-20">
        <section>
          <h2 className={`${typography.heading}`}>Products</h2>
          <div>
            <ProductList />
          </div>
        </section>
      </Container>
    </>
  );
}
