import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import { clearCart } from "../redux/cartSlice";
import { updateQuantity } from "../redux/cartSlice";

const Cart = (item) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlusClick = (itemId) => {
    dispatch(updateQuantity({ itemId, quantity: 1 }));
  };

  const handleMinusClick = (itemId) => {
    dispatch(updateQuantity({ itemId, quantity: -1 }));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  };
  const handleClearCart = (items) => {
    dispatch(clearCart(items));
  };

  const cartItems = (item) => {
    return (
      <>
        <div className="px-4 my-5 border border-dark w-75 m-auto rounded-4" key={item.id}>
          <div className="container py-4 ">
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="btn btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-space-evenly">
              <div className="col-md-4">
                <img
                  src={item.image}
                  alt={item.title}
                  height="200px"
                  width="180px"
                  className="card-img-top"
                />
              </div>
              <div className="col-md-4">
                <h3>{item.title}</h3>
                <p className="lead fw-bold">${item.price}</p>
                <p className="fw-bold ">
                  Quantity:
                  <button className="btn btn-outline-success fw-bold mx-2" onClick={() => handlePlusClick(item.id)}>+</button>
                  {item.quantity}{" "}
                  <button className="btn btn-outline-danger fw-bold mx-2" onClick={() => handleMinusClick(item.id)}>-</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart Is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const resetCart = () => {
    return (
      <div className="conatiner d-flex flex-column justify-content-center">
        {items.map(cartItems)}
        <p className="fw-bold fs-3 text-center">Total Price: ${totalPrice}</p>
        <div className="d-flex align-items-center justify-content-center flex-row ">
          <button
            className="btn btn-outline-danger fs-4 fw-bold m-4 px-5"
            onClick={() => handleClearCart(item)}
          >
            Clear Cart
          </button>
          <button
            className="btn btn-primary fs-4 fw-bold m-4 px-5"
            onClick={() => handleClearCart(item)}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {items.length === 0 && emptyCart()}
      {items.length !== 0 && resetCart()}
    </>
  );
};

export default Cart;
