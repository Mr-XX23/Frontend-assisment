import React, { useState } from "react";

const CheckOut = () => {
  let [data, setData] = useState();
  let [error, setError] = useState();

  const handleChange = (ev) => {
    let { type, value, name } = ev.target;

    setData((preState) => {
      data = {
        ...preState,
        [name]: value,
      };
      validateForm(name);
      return data;
    });
  };

  const validateForm = (field) => {
    let message = "";
    switch (field) {
      case "fullName":
        message = data?.fullName ? "" : "Full Name is required";
        break;

      case "email":
        let regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        message = data.email
          ? data.email.match(regex)
            ? ""
            : "Invalid email format"
          : "Email is required";
        break;

      case "billing_address":
        message = data?.billing_address ? "" : "Billing address is required";
        break;

        case "delivery_add" :
          message = data?.delivery_add ? "" : "Delivery address is required";
          break;

          case "contact_no" :
            message = data?.contact_no.length < 10 || data?.contact_no.length >10 ? "Please enter correct number" : "" 
  
    }
    setError((prestate) => {
      error = {
        ...prestate,
        [field]: message,
      };
      return error;
    });
  };
  console.log(error);
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="ml-2 text-lg font-medium leading-6 text-gray-900">
                CheckOut
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="/" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <button className="mb-1 border border-transparent hover:border-[#60bb46] bg-[#60bb46] hover:bg-gray-100 text-white hover:text-[#60bb46] flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                        <div>
                          <p className="text-base leading-4">eSewa</p>
                        </div>
                      </button>
                      <button className="mt-1 border border-transparent hover:border-[#60438e] bg-[#60438e] hover:bg-gray-100 text-white hover:text-[#60438e] flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                        <div>
                          <p className="text-base leading-4">Kalti</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="mt-8 text-base leading-4 text-gray-800 font-bold">
                      Full Name
                    </label>
                    <div className="mt-2 flex-col">
                      <div>
                        <input
                          name="fullName"
                          onChange={handleChange}
                          className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <span className="text-red-700 text-sm"> {error?.fullName}</span>
                    </div>
                  </div>
                  <div>
                    <label className="mt-8 text-base leading-4 text-gray-800 font-bold">
                      Email
                    </label>
                    <div className="mt-2 flex-col">
                      <div>
                        <input
                          name="email"
                          onChange={handleChange}
                          className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <span className="text-red-700 text-sm"> {error?.email}</span>
                    </div>
                  </div>
                  <div>
                    <label className="mt-8 text-base leading-4 text-gray-800 font-bold">
                      Billing Address
                    </label>
                    <div className="mt-2 flex-col">
                      <div>
                        <input
                          name="billing_address"
                          onChange={handleChange}
                          className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="text"
                          placeholder="Full Address: City,street Address"
                        />
                      </div>
                      <span className="text-red-700 text-sm"> {error?.billing_address}</span>
                    </div>
                  </div>
                  <div>
                    <label className="mt-8 text-base leading-4 text-gray-800 font-bold">
                      Delivery Address
                    </label>
                    <div className="mt-2 flex-col">
                      <div>
                        <input
                          onChange={handleChange}
                          name="delivery_add"
                          className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="text"
                          placeholder="Full Address: City,street Address"
                        />
                      </div>
                      <span className="text-red-700 text-sm"> {error?.delivery_add}</span>
                    </div>
                  </div>
                  <div>
                    <label className="mt-8 text-base leading-4 text-gray-800 font-bold">
                      Telephone
                    </label>
                    <div className="mt-2 flex-col">
                      <div>
                        <input
                          name="contact_no"
                          onChange={handleChange}
                          className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{7}"
                          placeholder="123-1234567"
                        />
                      </div>
                      <span className="text-red-700 text-sm"> {error?.contact_no}</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
