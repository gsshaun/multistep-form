import React from "react";

const UserRegistration: React.FC = () => {
  return (
    <div className="flex flex-col max-w-2xl w-full">
      <div className="bg-amber-200 shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold">Full Stack Job</h1>
        <h2 className="text-2xl font-bold mb-6">User Registration</h2>
        <div className="flex md:flex-row md:justify-evenly flex-col items-center">
          <div className="flex flex-col">
            <div className="flex flex-row justify-start">
              <label htmlFor="name" className="mb-2 font-bold">
                Name:
              </label>
            </div>
            <input
              type="text"
              id="name"
              className="w-60 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none">
            </input>
          </div>
          <div className="flex flex-col  mt-3 md:mt-0">
            <div className="flex flex-row justify-start">
              <label htmlFor="email" className="mb-2 font-bold">
                Email:
              </label>
            </div>
            <input
              type="text"
              id="email"
              className="w-60 border-gray-300 rounded-md shadow-sm p-2 focus:outline-none">
            </input>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-5 md:pl-10 md:justify-start">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
