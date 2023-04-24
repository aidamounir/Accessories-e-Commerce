import { useState } from "react";
import HeadInfo from "../components/Head";
import CollapseExpand from "../components/CollapseExpand";

function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = [
    {
      title: "I Have A Question About My Order",
      questions: [
        {
          question: "How Can I Track My Order?",
          answer:
            "You will need the tracking number that was sent via email. If there is no tracking information on the page it may be due to it not being available yet, please check back the following day. If it is still not available please contact our support desk and we will check for you.",
        },
        {
          question: "I didn't give my shipping address?",
          answer:
            "When you pay via PayPal express the shipping address is taken from your paypal account so you don't have to fill out the forms... Please check the delivery address inside your PayPal account make sure it is correct, if not please contact us and provided the order has not already been dispatched we may be able to change the address for you.",
        },
      ],
    },
    {
      title: "I Have A Question About Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: `Average delivery time is 10-20 business days, but for some of our popular products under heavy demand it may take slightly longer so we ask all customers to please allow 35 business days before contacting us regarding shipping, thanks!`,
        },
        {
          question: "How Much Is Shipping?",
          answer:
            "Unless otherwise stated on the product page, shipping is free :)",
        },
      ],
    },
    {
      title: "I Have A Question About Payment",
      questions: [
        {
          question: "What payment options do you offer?",
          answer: `We accept payment via Credit/debit cards, PayPal and BitCoin. We DO NOT accept Cash On Delivery.

            Credit & Debit card payments via our Omise payment gateway is available for the following currencies: USD, GBP, EUR, SGD, JPY
            
            Payment by credit/debit card in "most" other currencies can be done via PayPal
            
            To pay by debit or credit card via PayPal, checkout as normal and click the “proceed to PayPal” button on the checkout page. On the next page below the “login” button you will see a link “pay with a debit or credit card”
            
            Click this link and you will be able to input your card details and complete the payment.
            
            To pay via Bitcoin or Bitcoin cash please select the "BitPay" option on the checkout page`,
        },
      ],
    },
  ].filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeadInfo title="Help | InJestic" />

      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="main-title my-8">
          <h1 className="font-bold text-2xl text-center">
            How can we help you?
          </h1>
        </div>

        <div className="main-search mb-10 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
          <button className=" focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Describe your issue"
            className=" text-base w-full bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
          {filteredItems.map((item, index) => (
            <CollapseExpand searchTerm={searchTerm} key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Help;
