import React from "react";

const UserRegistration: React.FC = () => {

  const handleSendMessage = () => {
    console.log("Okay")
    return "";
  }
  return (
    <>
      <div className="flex flex-col w-full max-w-2xl">
        <div className="p-8 border-indigo-100 rounded-lg shadow-md">
          <div className="flex flex-row items-center justify-center mb-6">
            <div className="flex items-center step-bar">
              <div className="w-56 h-10 text-white bg-blue-500 step">Input</div>
              <div className="text-gray-500 bg-gray-300 step">Confirm</div>
              <div className="text-gray-500 bg-gray-300 step">Complete</div>

            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold">User Registration</h1>
          <div className="flex flex-col w-full max-w-2xl">
            <div className="border-indigo-100 rounded-lg">
              <h1 className="text-3xl font-bold">Full Stack Job</h1>
              <h2 className="mb-6 text-2xl font-bold">User Registration</h2>
              <div className="p-4">
                <div className="flex items-center w-full mb-3">
                  <span className="required-label">Required</span>
                  <span className="text-sm font-bold">Name</span>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mr-4 input-field">
                    </input>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="input-field">
                    </input>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center w-full mb-3">
                  <span className="required-label">Required</span>
                  <span className="text-sm font-bold">Email</span>
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="input-field">
                  </input>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center w-full mb-3">
                  <span className="optional-label">Optional</span>
                  <span className="text-sm font-bold">Phone</span>
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="input-field">
                  </input>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center w-full mb-3">
                  <span className="required-label">Required</span>
                  <span className="text-sm font-bold">CV</span>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col items-start mb-4 text-xs text-gray-400 whitespace-pre-wrap">
                    <div>
                      <span>Please add your resume in PDF.</span>
                    </div>
                    <div>
                      <span>For designer, please also submit a portfolio here as well as your CV. If your portfolio is on an external website, please add the link in the "web site" below.</span>
                    </div>


                  </div>
                  <div>

                  </div>

                </div>
              </div>





              <div className="flex flex-col items-center md:flex-row md:justify-evenly">
                <div className="flex flex-col">
                  <div className="flex flex-row-reverse items-baseline justify-between md:flex-row md:justify-start">
                    <span className="required-label">Required</span>
                    <label htmlFor="name" className="mb-2 font-bold">
                      Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="input-field">
                  </input>
                </div>
                <div className="flex flex-col mt-3 md:mt-0">
                  <div className="flex flex-row-reverse items-baseline justify-between md:flex-row md:justify-start">
                    <span className="required-label">Required</span>
                    <label htmlFor="email" className="mb-2 font-bold">
                      Email
                    </label>
                  </div>
                  <input
                    type="text"
                    id="email"
                    className="input-field">
                  </input>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-5 md:pl-10 md:justify-start">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600"
                  onClick={handleSendMessage}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default UserRegistration;
