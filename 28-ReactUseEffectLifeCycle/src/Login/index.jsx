import { useState } from "react";
import "./index.css";
import Welcome from "../Welcome";
import Logout from "../Logout";
import Product from "../Product";

const LOGIN = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };
  console.log(isLogged);
  return (
    <>
      <button
        className={`loginBtn ${isLogged ? "hidden" : ""}`}
        onClick={handleLogin}
      >
        LOGIN
      </button>
      {isLogged ? (
        <div>
          <div className="header">
            <Welcome />
            <Logout setIsLogged={setIsLogged} />
          </div>
           <Product/>
        </div>
      ) : (
        <p className="validation">You should login to see products</p>
      )}
    </>
  );
};

export default LOGIN;
