import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { footerNavItems } from "../service/footerList";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const loadModal = ({ title, content }) => {
    return (
      <Modal
        onClose={() => setShowModal(!showModal)}
        show={showModal}
        title={title}
      >
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Modal>
    );
  };

  return (
    <footer className="md:px-6  bg-white text-center p-2">
      <div className="flex flex-col items-center justify-between lg:justify-around md:flex-row">
        <div>
          <Link href="/">
            <a
              className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              href="#"
            >
              <Image
                src="/images/injestic.svg"
                alt="injestic logo of footer"
                width={180}
                height={90}
              />
            </a>
          </Link>
        </div>
        <nav className="flex flex-col  md:flex-row space-y-5 md:space-y-0 p-4">
          <>
            {footerNavItems.map((footerItem) => (
              <a
                key={footerItem.id}
                // className="px-4 text-sm"
                className="text-lg cursor-pointer hover:underline md:mr-6 text-gray-800"
                onClick={() => {
                  setModalContent(footerItem);
                  setShowModal(!showModal);
                }}
              >
                {footerItem.title}
              </a>
            ))}
            {loadModal(modalContent)}
          </>
        </nav>
      </div>

      <hr className="  sm:mx-auto " />

      <div className="flex items-center p-4">
        <span className="block text-md m-auto  sm:text-center text-gray-600 ">
          © {new Date().getFullYear().toString() + " "}Injestic
          {/* <Link href="https://walidhamdi.com">
            <a target="_blank" className="hover:underline ml-3">
              Walid Hamdi
            </a>
          </Link> */}
        </span>
      </div>
    </footer>
  );
}
