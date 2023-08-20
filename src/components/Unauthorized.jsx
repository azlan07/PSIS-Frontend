import React, { useEffect } from "react";
import { AiFillWarning } from 'react-icons/ai'

function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid place-items-center">
        <div className="text-9xl">
          <AiFillWarning />
        </div>
        <p className="mt-4 text-xl">You are not authorized to access this page.</p>
      </div>
    </div>


  );
}

export default Unauthorized;
