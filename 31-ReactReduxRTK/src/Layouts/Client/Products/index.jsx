import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../../redux/services/products";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavs } from "./../../../redux/features/FavoritesSlice";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const { data, isError, isLoading,refetch } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const dispacth = useDispatch();
  const favs = useSelector((state) => state.favorites.items);
  const navigate=useNavigate()

  if (isError) {
    <p>There are errors in the project.</p>;
  }
  if (isLoading) {
    <p>LOADING...</p>;
  }
  const handleAddFavs = (product) => {
    dispacth(toggleFavs(product));
  };

  const handleDelete = async(id) => {
    try {
      await deleteProduct(id)
      refetch()
    } catch (error) {
      console.log(error);
    }
  };
  const handleDetails=(id)=>{
    navigate(`/products/${id}`)
  }
  return (
    <div>
      <div className="mx-auto max-w-[1280px]">
        <div className="py-20 flex flex-wrap justify-center items-center gap-5">
          {data?.map((p) => {
            return (
              <div
                key={p.id}
                className="w-[300px] relative h-[500px] border flex flex-col cursor-pointer items-stretch justify-start p-5 gap-2 transition duration-400 border-gray-500 rounded-lg hover:translate-y-[-10px] hover:shadow-2xl "
              >
                <img
                  className="w-full h-auto object-contain p-4 max-h-[300px]"
                  src={p.image}
                  alt=""
                />
                <h1 className="font-bold text-xl ">
                  {p.title.slice(0, 20) + "..."}
                </h1>
                <p>
                  <span className="font-bold">Category: </span>
                  {p.category}
                </p>
                <p>{p.description.slice(0, 50) + "..."}</p>
                <p>
                  <span className="font-bold">Price: </span>
                  {p.price}$
                </p>
                <button className="border rounded-[50%] bg-amber-300 flex justify-center absolute transition duration-300 text- p-1 text-2xl hover:translate-y-[-10px]">
                  <IoCart />
                </button>
                <button onClick={()=>handleDetails(p.id)} className="border border-black  rounded-[50%] right-[50px] top-[20px] bg-blue-500 flex justify-center transition duration-300 absolute p-1.5 text-xl text-white hover:translate-y-[-10px]">
                  <FaInfo />
                </button>
                <button
                  onClick={() => handleAddFavs(p)}
                  className="border border-black  rounded-[50%] left-[60px] top-[20px] bg-red-500 flex justify-center transition duration-300 absolute p-1.5 text-xl text-white hover:translate-y-[-10px]"
                >
                  {favs.find((fav) => fav.id == p.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="border border-black  rounded-[50%] right-[10px] top-[20px] bg-red-700 flex justify-center transition duration-300 absolute p-1.5 text-xl text-white hover:translate-y-[-10px]"
                >
                  <MdDelete />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
