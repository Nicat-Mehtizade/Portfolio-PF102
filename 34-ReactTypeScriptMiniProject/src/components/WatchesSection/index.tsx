import { useGetDataQuery } from "../../redux/services/watchesApi";
import type { Watch } from "../../types";
import { CiHeart } from "react-icons/ci";
import styles from "./index.module.css"
const WatchesSection = () => {
  const { data, isError, isLoading } = useGetDataQuery();

  if (isError) {
    return <p>Some errors occured!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);
  return (
    <div className="py-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl text-black font-bold">Popular Items</h1>
          <p className="text-sm text-gray-400 w-[75%] md:w-[45%] text-center ">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
          <div className="flex flex-wrap justify-evenly gap-6">
            {data && data?.length > 0 ? (
              data.map((p: Watch) => {
                return (
                  <div
                    key={p.id}
                    className="md:w-[30%] sm:w-[48%] xs:w-[100%] flex flex-col gap-3 group"
                  >
                    <div className="border-b-3 border-red-500 relative overflow-hidden">
                      <img src={p.image} alt={p.model} className="w-full" />
                      <button className="absolute top-3 right-3  p-2 bg-transparent duration-500  opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <CiHeart className="w-8 h-8 text-red-500" />
                      </button>
                      <button className="cursor-pointer absolute bottom-0 left-0 w-full bg-red-500 text-white py-4 text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        Add to Cart
                      </button>
                    </div>
                    <h1 className="font-bold text-xl">
                      {p.brand} {p.model}
                    </h1>
                    <p className="font-semibold text-lg text-gray-700">
                      $ {p.price}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>There is no watch!</p>
            )}
          </div>
          <button className={`bg-red-500 text-white font-medium text-sm py-4 px-6 mt-15 cursor-pointer ${styles.button}`}>VIEW MORE PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default WatchesSection;
