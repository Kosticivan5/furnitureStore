import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { customFetch, formattedPrice, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import {
  OriginalFeaturedProducts,
  FeaturedProducts,
} from "../components/types";
import { ChangeEvent, useState } from "react";

type LoaderData = {
  product: OriginalFeaturedProducts;
};

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<LoaderData> => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData() as LoaderData;
  const {
    image,
    colors,
    description,
    price,
    title,
    company,
  }: FeaturedProducts = product.attributes;
  const dollarsAmount = formattedPrice(parseInt(price, 10));
  const [productColor, setProductColor] = useState<string>(colors[0]);
  const [amount, setAmount] = useState<number>(1);

  const handleAmount = (e: ChangeEvent<HTMLSelectElement>): void => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li className="capitalize">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="capitalize">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="capitalize">{title}</li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-7">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              choose a color:
            </h4>
            <div className="mt-2">
              {colors.map((color: string) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-bordered w-full select-md  "
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(5)}
            </select>
          </div>

          {/* CART BUTTON */}
          <div className="mt-10">
            <button
              className="btn btn-primary btn-md"
              onClick={() => console.log("add to bag")}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
