import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils/index";
import { type OriginalFeaturedProducts } from "../components/types";

const url = "/products?featured=true";

export const loader = async (): Promise<OriginalFeaturedProducts[]> => {
  const response = await customFetch(url);
  const products: OriginalFeaturedProducts[] = response.data.data;
  console.log(products);
  return products;
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
