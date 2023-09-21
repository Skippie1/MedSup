import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Your Order is being processed.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Your Order has been picked up from the seller.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Your Order is on the way yo your city.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your order is in your City Logistic Hub!
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Your Order is out for Delivery!
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Your Order has been delivered!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Your Refund is being processed!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Your Item has been Refunded!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
