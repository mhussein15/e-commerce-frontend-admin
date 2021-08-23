import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchOrders } from "../../../store/actions/orderActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OrderItem from "../OrderItem";

export default function OrdersPage() {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderReducer.orders);
  const orderItems = orders.map((order) => <OrderItem item={order} />);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (!user) return <Redirect to="/admin" />;
  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="container-fluid mt-5" style={{ width: "90%" }}>
        <div className="row justify-content-center mt-5">
          <h1>Orders</h1>
        </div>
        <div className="row mt-5 border-bottom">
          <div className="col-3">
            <h5>Product</h5>
          </div>
          <div className="col-3">
            <h5>Location</h5>
          </div>
          <div className="col-6 d-flex justify-content-between align-items-center text-center">
            <h5>User</h5>
            <h5>Status</h5>
            <h5>Total</h5>
          </div>
        </div>
        {orders.length === 0 ? (
          <div
            className="row d-flex justify-content-center align-items-center "
            style={{ height: "50vh" }}
          >
            <div className="text-center">
              <h3>No Orders</h3>
            </div>
          </div>
        ) : (
          <>{orderItems}</>
        )}
      </div>
    </>
  );
}
