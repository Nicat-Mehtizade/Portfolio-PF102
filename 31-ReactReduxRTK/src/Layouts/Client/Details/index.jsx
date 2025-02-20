import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/services/products";

const Details = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(id);
  console.log(data);

  if (isError) {
    <p>There are errors in the project.</p>;
  }

  if (isLoading) {
    <p>LOADING...</p>;
  }

  return (
    <div>
      <div className="mx-auto max-w-[1280px]">
        <div className="py-25">
          <img className="max-h-[400px]" src={data?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
