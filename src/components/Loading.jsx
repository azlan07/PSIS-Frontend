import React from 'react';

const Loading = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <span className="loading loading-bars loading-8x1"></span>
      <h1 class="text-gray-800 text-lg font-semibold mt-2">Harap Tunggu</h1>
    </div>

  );
};

export default Loading;
