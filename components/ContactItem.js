import React from "react";

const ContactItem = () => {
  return (
    <div className="border-b-[0.5px] py-2 flex text-secondary-50 bg-transparent hover:bg-primary-500 cursor-pointer transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <div className="ml-4">
        <p className="uppercase md:text-xl font-bold">Jane Doe</p>
        <p className="font-light">0763313051</p>
      </div>
    </div>
  );
};

export default ContactItem;
