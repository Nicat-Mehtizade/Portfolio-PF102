import "./index.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "./../../../constants/index";
import axios from "axios";
import { message, Popconfirm, Modal } from "antd";

const cancel = (e) => {
  console.log(e);
  message.error("Click on No");
};
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedBtn, setEditedBtn] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const showModal = (product) => {
    setIsModalOpen(true);
    setEditedBtn(product);
  };

  const handleOk = async (e) => {
    setIsModalOpen(false);
    e.preventDefault();
    console.log(editedBtn.id);
    try {
      const response = await axios.patch(
        `${BASE_URL}products/${editedBtn.id}`,
        editedBtn
      );

      setProducts((prevProduct) =>
        prevProduct.map((p) => (p.id === editedBtn.id ? response.data : p))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getProducts = async () => {
    try {
      const response = await axios(`${BASE_URL}products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}products/${id}`);
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="adminProducts">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((p) => {
                    return (
                      <tr className="a" key={p.id}>
                        <td>{p.id}</td>
                        <td>
                          <img className="adminImage" src={p.image} alt="" />
                        </td>
                        <td className="adminProductTitle">{p.title}</td>
                        <td className="adminProductPrice">{p.price}</td>
                        <td className="adminProductDesc">
                          {p.description?.slice(0, 60) + "..."}
                        </td>
                        <td>
                          <div>
                            <button
                              onClick={() => showModal(p)}
                              className="editBtn"
                            >
                              Edit
                            </button>
                            <Popconfirm
                              title="Delete the product"
                              description="Are you sure to delete this product?"
                              onConfirm={() => {
                                handleDelete(p.id);
                              }}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No"
                            >
                              <button className="deleteBtn">Delete</button>
                            </Popconfirm>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        title="Add new product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form
          onSubmit={handleOk}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            onChange={(e) => {
              setEditedBtn({ ...editedBtn, title: e.target.value });
            }}
            className="border-1"
            type="text"
            name="title"
            id="title"
            placeholder="Enter a title"
          />
          <input
            onChange={(e) => {
              setEditedBtn({ ...editedBtn, price: e.target.value });
            }}
            className="border-1"
            type="text"
            name="price"
            id="price"
            placeholder="Enter a price"
          />
          <input
            onChange={(e) => {
              setEditedBtn({ ...editedBtn, description: e.target.value });
            }}
            className="border-1"
            type="text"
            name="description"
            id="description"
            placeholder="Enter a description"
          />
        </form>
      </Modal>
    </>
  );
};

export default AdminProducts;
