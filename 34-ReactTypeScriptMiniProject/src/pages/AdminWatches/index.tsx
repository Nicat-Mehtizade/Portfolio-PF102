import { useState } from "react";
import { Modal } from "antd";
import { useDeleteDataByIdMutation, useEditDataMutation, useGetDataQuery } from "../../redux/services/watchesApi";
import { Watch } from "../../types";
interface DATA {
  brand: string,
  model: string,
  description: string,
  price: number,
  image: string,
}
const AdminProducts = () => {
  const {data,isError,isLoading}=useGetDataQuery()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | number | null>(null);
  const [deleteProduct]=useDeleteDataByIdMutation()
  const [edit]=useEditDataMutation()
  const [editProduct, setEditProduct] = useState<DATA>({
    brand: "",
    model: "",
    description: "",
    price: 0,
    image: "",
  });
  console.log(editProduct);
  console.log(data);
  if (isError) {
    <p>some errors occured!</p>;
  }
  if (isLoading) {
    <p>Loading...</p>;
  }

  const showModal = (product:Watch) => {
    setIsModalOpen(true);

    setSelectedProductId(product.id);
    setEditProduct({
      brand: product.brand,
      model: product.model,
      description: product.description,
      price: product.price,
      image: product.image,
    });

    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (!selectedProductId) return;
    try {
      await edit({ id: selectedProductId, editedProduct: editProduct }).unwrap();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

const handleDelete=async(id)=>{
  try {
    const response=await deleteProduct(id)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div>
      <div className="max-w-[1280px] mx-auto">
        <div className="overflow-x-auto py-10">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border border-gray-300">Image</th>
                <th className="p-3 text-left border border-gray-300">Name</th>
                <th className="p-3 text-left border border-gray-300">
                  Description
                </th>
                <th className="p-3 text-left border border-gray-300">Price</th>
                <th className="p-3 text-left border border-gray-300">
                  Category
                </th>
                <th className="p-3 text-center border border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id} className="border border-gray-300">
                    <td className="p-3 border border-gray-300">
                      <img
                        className="h-[100px] w-[100px] object-cover rounded"
                        src={item.image}
                        alt={item.brand}
                      />
                    </td>
                    <td className="p-3 border border-gray-300">{item.brand}</td>
                    <td className="p-3 border border-gray-300">
                      {item.description}
                    </td>
                    <td className="p-3 border border-gray-300">
                      $
                      {item.price}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {item.model}
                    </td>
                    <td className="p-3 border border-gray-300 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => showModal(item)}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={()=>handleDelete(item.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="p-3 text-center text-gray-500 border border-gray-300"
                  >
                    There is no product!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-2">
          <input
            value={editProduct.brand}
            onChange={(e) => {
              setEditProduct({ ...editProduct, brand: e.target.value });
            }}
            className="border p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Brand"
          />
                    <input
            value={editProduct.model}
            onChange={(e) => {
              setEditProduct({
                ...editProduct,
                model: e.target.value,
              });
            }}
            className="border p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Model"
          />
          <input
            value={editProduct.description}
            onChange={(e) => {
              setEditProduct({ ...editProduct, description: e.target.value });
            }}
            className="border p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Description"
          />
          <input
            value={editProduct.price}
            onChange={(e) => {
              setEditProduct({ ...editProduct, price: Number(e.target.value) });
            }}
            className="border p-1 rounded-sm"
            type="number"
            name=""
            id=""
            placeholder="Price"
          />
          <input
            value={editProduct.image}
            onChange={(e) => {
              setEditProduct({ ...editProduct, image: e.target.value });
            }}
            className="border p-1 rounded-sm"
            type="text"
            name=""
            id=""
            placeholder="Image"
          />
        </div>
      </Modal>
    </div>
  );
};

export default AdminProducts;
