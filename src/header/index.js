import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="w-full flex p-12 bg-green-300 justify-between items-center">
      <h1
        className="border-2 text-white font-bold rounded-sm text-4xl p-4"
        data-testid="app-title"
      >
        <Link to="/">Stream-It-Now</Link>
      </h1>
      <div>
        <a className="p-6 text-lg m-4" href="#" data-testid="app-login">
          Login now
        </a>
        <a
          className="p-6 text-lg text-gray-200 bg-indigo-800 m-4"
          href="#"
          data-testid="app-trial"
        >
          Start your Free Trial
        </a>
      </div>
    </header>
  );
};
