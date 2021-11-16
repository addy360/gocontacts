import { useState } from "react";
import Contacts from "../components/Contacts";
import Search from "../components/Search";

export default function Home() {
  const [auth, setAuth] = useState(null);
  const handleClick = () => {
    if (!auth) setAuth("hellow");
    else setAuth(null);
  };
  return (
    <div className="w-screen h-screen bg-black relative py-4 overflow-hidden font-cairo">
      <div className="absolute inset-0 z-0 ">
        <img
          src="bg.svg"
          alt=""
          className="w-full h-auto object-cover filter blur-lg"
        />
      </div>
      <div className="md:w-1/3 p-4 mx-auto rounded-md filter drop-shadow-md overflow-y-auto overflow-x-hidden relative h-full">
        <div className="absolute inset-0 z-0 ">
          <img
            src="contactbg.svg"
            alt=""
            className="h-full w-auto object-cover "
          />
        </div>
        {/* contacts */}
        <div className=" flex flex-col px-4 bg-primary-300 bg-opacity-95 filter contrast-50 drop-shadow-lg shadow-inner h-full rounded-md relative z-50 ">
          <h4 className="text-center text-4xl filter drop-shadow-md text-secondary font-medium py-5">
            Your contacts
          </h4>
          {auth && (
            <>
              <Search />
              <Contacts />
            </>
          )}
          {!auth && (
            <button
              onClick={handleClick}
              className="py-2 px-5 rounded outline-none shadow-lg filter drop-shadow-md bg-secondary text-primary-900 text-xl hover:bg-secondary-700 active:scale-50 transition-all "
            >
              Load contacts
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
