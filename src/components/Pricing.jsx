import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20" id="founders">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Founding{" "}
      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Partners
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div class="w-full max-w-sm dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img class="p-8 rounded-t-lg h-96 w-80 mx-auto" src="/src/assets/shahryar.jpeg" alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Shahryar Sohail<br /><span className="text-teal-300">Software Engineer</span></h5>
            </a>
          </div>
        </div>
        
        <div class="w-full max-w-sm dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="p-8 rounded-t-lg h-96 w-80 mx-auto" src="/src/assets/asad.jfif" alt="product image" />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                Asad Ullah Masood<br /><span className="text-teal-300">Data Scientist</span></h5>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;


{/* <div className="flex flex-wrap">
{pricingOptions.map((option, index) => (
  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
    <div className="p-10 border border-neutral-700 rounded-xl">
      <p className="text-4xl mb-8">
        {option.title}
        {option.title === "Pro" && (
          <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
            (Most Popular)
          </span>
        )}
      </p>
      <p className="mb-8">
        <span className="text-5xl mt-6 mr-2">{option.price}</span>
        <span className="text-neutral-400 tracking-tight">/Month</span>
      </p>
      <ul>
        {option.features.map((feature, index) => (
          <li key={index} className="mt-8 flex items-center">
            <CheckCircle2 />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
      >
        Subscribe
      </a>
    </div>
  </div>
))}
</div> */}