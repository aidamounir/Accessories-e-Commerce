import { useState } from "react";
import { getProduct } from "../lib/shopify";

export function OrderTrackingCom() {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTrackClick = async () => {
    if (!orderId) {
      setErrorMessage("Please enter your order ID.");
      return;
    }

    const product = await getProduct(orderId);

    if (!product) {
      setErrorMessage("No order found with the specified ID.");
      setOrderDetails(null);
      return;
    }

    setOrderDetails(product);
    setErrorMessage("");
  };

  return (
    <div className="leading-10 text-lg p-8 rounded-md w-full h-[90vh] flex flex-col justify-center items-center">
      <h2 className="text-gray-600 font-bold text-2xl">
        Please enter you tracking number below.
      </h2>
      <span className="font-normal">
        If your tracking number doesn't work feel free to contact us at&#160;
        {process.env.NEXT_PUBLIC_SHOPIFY_STORE_EMAIL}
      </span>

      <input
        className="bg-gray-50 outline-none  border-yellow-200 rounded-full ml-1 mt-10 block px-10 py-2"
        type="text"
        autoFocus
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Search by track ID"
      />

      <div className="inline-block align-bottom mt-10 text-sm">
        <button
          onClick={handleTrackClick}
          className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
        >
          <i className="fa fa-shopping-cart -ml-2 mr-2" aria-hidden="true"></i>
          Track
        </button>
      </div>

      {errorMessage && <p className="mt-5">{errorMessage}</p>}
      {orderDetails && (
        <div>
          <h2>Order Details</h2>
          <p>Order ID: {orderDetails.id}</p>
          <p>Product Name: {orderDetails.title}</p>
          <p>
            Price: {orderDetails.variants[0].priceV2.amount}{" "}
            {orderDetails.variants[0].priceV2.currencyCode}
          </p>
          <p>Image:</p>
          <img
            src={orderDetails.images[0].originalSrc}
            alt={orderDetails.images[0].altText}
          />
        </div>
      )}
    </div>
  );
}
