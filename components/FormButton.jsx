import React from "react";

const FormButton = () => {
  return (
    <button className="button">
      Submit
      <style jsx>{`
        .button {
          margin: 1rem 0;
          width: 100%;
          font-size: 1.5rem;
          text-align: center;
          padding: 1rem 0;
          color: white;
          transition: all 0.5s;
          cursor: pointer;
          outline: none;
          border: none;
          border-radius: 5px;
          background: #050dac;
        }
        .button:active {
          transform: translateY(5px);
        }
        .button:hover {
          filter: brightness(120%);
        }
      `}</style>
    </button>
  );
};

export default FormButton;
