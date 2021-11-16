import React, { useState } from "react";
import ContactItem from "./ContactItem";

const Contacts = () => {
  return (
    <div className="flex-1 shadow-lg filter drop-shadow-xl p-4 border py-2 rounded-t-2xl overflow-x-hidden overflow-y-auto">
      {Array(100)
        .fill(3)
        .map((_, i) => (
          <ContactItem key={i} />
        ))}
    </div>
  );
};

export default Contacts;
