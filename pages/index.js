import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black relative py-4 overflow-hidden">
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
        <div className="bg-green-300 ">
          <h4 className="text-center text-2xl drop-shadow-md font-bold text-accent-500">
            Your contacts
          </h4>
        </div>
      </div>
    </div>
  );
}
