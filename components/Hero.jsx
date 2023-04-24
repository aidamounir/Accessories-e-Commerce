import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="  bg-gray-50 flex items-center justify-center pt-5 md:mx-10 overflow-hidden relative">
        <div className="w-full rounded bg-white shadow p-10   text-gray-800 relative md:text-left">
          <div className="md:flex items-center ">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative ">
                <div className="w-full h-full relative z-10">
                  <Image
                    src="/images/hero.png"
                    priority
                    width={500}
                    height={500}
                    alt="hero image of product"
                  />
                </div>
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  Mens's Ragged <br />
                  Waterproof Jacket
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis...
                  <a
                    href="/"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i className="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    59
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    .99
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i
                      className="fa fa-shopping-cart -ml-2 mr-2"
                      aria-hidden="true"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link href="https://www.buymeacoffee.com/scottwindon">
            <a
              title="Buy me a beer"
              target="_blank"
              className="block w-16 h-16 rounded-full  transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/images/buyforme.jpg"
              />
            </a>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
