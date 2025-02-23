import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/services/products";
import { Box, Rating } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(id);
  console.log(data);
  console.log(id);
  if (isError) {
    <p>Some error occured!</p>;
  }
  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          <div className="relative w-full md:w-1/2">
            <img
              src={data?.image}
              alt={data?.name}
              className="w-full h-auto rounded-lg"
            />

            {data?.isNew && (
              <p className="absolute top-5 left-5 bg-red-500 text-white font-medium py-1 px-4 rounded-3xl">
                New
              </p>
            )}

            {data?.discount && (
              <p className="absolute top-5 right-5 bg-green-500 text-white font-medium py-1 px-4 rounded-3xl">
                {data.discount}%
              </p>
            )}
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold">{data?.name}</h1>
            <p className="bg-gray-500 w-[30%] text-center px-2 py-1 text-white font-medium rounded-3xl">  {data?.category}</p>
            <p className="text-gray-600 text-lg ">Description: {data?.description}</p>
            <Box>
                      <Rating
                        name="simple-controlled"
                        value={Number(data?.rating)}
                        readOnly
                      />
                    </Box>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold text-blue-600">
                {(data?.price - (data?.price * data?.discount) / 100).toFixed(
                  2
                )}
                $
              </p>
              {data?.discount && (
                <p className="text-xl line-through text-red-500 font-semibold">
                  {data?.price.toFixed(2)}$
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
