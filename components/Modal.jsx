import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, [show]);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="overflow-y-auto overflow-x-hidden  fixed right-0 left-0 top-4 m-auto z-50 justify-center items-center   ">
      <div className="relative w-screen h-screen ">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-start px-14 py-6 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              {title && title}
            </h3>
            <button
              type="button"
              onClick={handleCloseClick}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="px-14 pt-7 ">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {children}
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="px-14 flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            
            <button
              onClick={handleCloseClick}
              className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-5 py-2 mb-4 font-semibold"
            >
              <i
                className="fa fa-shopping-cart -ml-2 mr-2"
                ariaHidden="true"
              ></i>
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
