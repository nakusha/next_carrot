import { NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 flex flex-col space-y-5">
      <div className="bg-white p-6 rounded-3xl shadow-xl flex justify-center flex-col">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Titak</span>
          <span className="font-semibold">$19</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="h-24 w-24 bg-red-400 rounded-full absolute -top-12 left-1/2 -translate-x-12" />
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Spent</span>
                <span className="font-medium">$2,310</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-500"></button>
                <button className="w-5 h-5 rounded-full bg-indigo-500"></button>
                <button className="w-5 h-5 rounded-full bg-teal-500"></button>
              </div>
              <div className="flex items-center space-x-5">
                <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500 rounded-md">
                  -
                </button>
                <span>1</span>
                <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500 rounded-md">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="font-medium text-2xl">$450</span>
              <button className="bg-blue-500 text-center text-white rounded-lg py-2 px-8 text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
