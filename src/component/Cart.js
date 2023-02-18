import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import handleCart from "../redux/reducer/handleCart";

const Cart = () => {

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const delCart = (product) => {
    dispatch(delCart(product));
  };


  const cartItems = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button
            onClick={() => delCart(product)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{state.length !== 0 && state.map(cartItems)}</>;
};

export default Cart;
