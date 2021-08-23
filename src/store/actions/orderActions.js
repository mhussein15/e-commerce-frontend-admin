import instance from "./instance";
import { toast } from "react-toastify";

export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("/orders");
    dispatch({
      type: "FETCH_ORDERS",
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const updateOrderStatus = (updatedOrder) => {
  return async (dispatch) => {
    try {
      await instance.put(`/orders/${updatedOrder.id}`, {
        accepted: updatedOrder.accepted,
      });
      dispatch({
        type: "UPDATE_ORDER",
        payload: { updatedOrder },
      });
      toast.success("Updated Order");
    } catch (error) {
      console.error(error);
    }
  };
};
