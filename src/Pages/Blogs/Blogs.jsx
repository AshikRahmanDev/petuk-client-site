import React from "react";

const Blogs = () => {
  return (
    <div className="md:h-[90vh] my-5 flex items-center justify-center">
      <div className=" md:w-[70%] border border-orange-500 rounded-lg p-3">
        <h4 className="font-bold my-2 ">Available Blogs:</h4>

        <div
          tabIndex={0}
          className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between SQL and NoSQL ?
          </div>
          <div className="collapse-content">
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              JSON Web Token (JWT) is a compact URL-safe means of representing
              claims to be transferred between two parties. JWTs are digitally
              signed using either a secret (HMAC) or a public/private key pair
              (RSA or ECDSA) which safeguards them from being modified by the
              client or an attacker.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time ?
          </div>
          <div className="collapse-content">
            <p>
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
