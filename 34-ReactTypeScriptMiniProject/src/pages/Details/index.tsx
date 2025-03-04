import { useParams } from "react-router-dom";
import { useGetDataByIdQuery } from "../../redux/services/watchesApi";
import Rating from "@mui/material/Rating";
const Details = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetDataByIdQuery(id ?? "");
  console.log(data);
  if (isError) {
    return <p>Some Errors occured!</p>;
  }
  if (isLoading) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }

  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex py-20 items-center justify-center">
          <div className="w-[45%]">
            <img src={data?.image} alt={data?.model} />
          </div>
          <div className="w-[45%] text-2xl flex flex-col gap-4">
            <div className="font-medium">
              <span className="text-red-500 font-bold">Brand: </span>
              {data?.brand}
            </div>
            <div className="font-medium">
              <span className="text-red-500 font-bold">Model: </span>
              {data?.model}
            </div>
            <div className="font-medium">
              <span className="text-red-500 font-bold">Description: </span>
              {data?.description}
            </div>
            <div className="font-medium">
              <span className="text-red-500 font-bold">Price: </span>$ {data?.price}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-red-500 font-bold">Rating: </span>
              <Rating name="read-only" value={data?.rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
