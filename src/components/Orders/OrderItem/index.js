import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../../store/actions/orderActions";
export default function OrderItem({ item }) {
  const [acceptedOption, setAcceptedOption] = useState(item.accepted);
  const dispatch = useDispatch();
  const option = {
    true: true,
    false: false,
  };
  const handleUpdate = (item) => {
    dispatch(updateOrderStatus({ ...item, accepted: acceptedOption }));
  };

  return (
    <div className="row my-5 border-bottom pb-4">
      <div className="col-3 d-flex align-items-center">
        <div>
          {item.order_item.map((item) => (
            <h5>
              {item.product} -----{" "}
              <span className="font-weight-bold">{item.quantity}</span>{" "}
            </h5>
          ))}
        </div>
      </div>
      <div className="col-3">
        <h5 className="">
          {item.user.user_address.address}---
          {item.user.user_address.city},{item.user.user_address.country}
        </h5>
      </div>
      <div className="col-6  d-flex justify-content-between align-items-center ">
        <h5 className="font-weight-bold">{item.user.username}</h5>
        <select
          className="custom-select w-25"
          onChange={(event) => setAcceptedOption(option[event.target.value])}
        >
          <option value="" selected={item.accepted === null} disabled>
            Choose here
          </option>
          <option
            value={true}
            selected={item.accepted !== null && !item.accepted}
          >
            Accept
          </option>
          <option
            value={false}
            selected={item.accepted !== null && !item.accepted}
          >
            Decline
          </option>
        </select>
        <button
          className="btn btn-outline-dark btn-md"
          onClick={() => handleUpdate(item)}
        >
          Update
        </button>
        <h5 className="font-weight-bold">{item.total} KWD</h5>
      </div>
    </div>
  );
}
