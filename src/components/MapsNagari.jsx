import React from "react";

const MapsNagari = () => {
  return (
    <div className="my-20 py-5" id="maps">
        <h1 className="font-semibold text-4xl text-center mb-10">Peta Nagari Sumanik</h1>
        <div className="flex justify-center items-center h-96">
        <iframe
          className="w-2/3 h-full border-2 border-gray-300 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.925615585978!2d100.56610558319527!3d-0.3781924373540951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd5339d558fc35f%3A0x776f9c26399e7f5d!2sSumanik%2C%20Salimpaung%2C%20Tanah%20Datar%20Regency%2C%20West%20Sumatra!5e0!3m2!1sen!2sid!4v1691070912524!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapsNagari;
