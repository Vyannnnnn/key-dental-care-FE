import React from "react";

const LoginForm = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <form className="w-[350px]">
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              for="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Password
              </label>
              <a href="/forgot_password" className="text-[#21695C]">
                Forgot Password
              </a>
            </div>

            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div class="flex items-center mb-4">
            <input
              id="disabled-checkbox"
              type="checkbox"
              value=""
              class="accent-[#21695C] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-greeen-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="disabled-checkbox"
              class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              Keep me signed in
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <a
            href="/admin"
            className="text-center w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#21695C] rounded-md hover:bg-[#165549] focus:outline-none focus:bg-[#165549]"
          >
            Login
          </a>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
