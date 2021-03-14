const Spinner = () => {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>

      <style jsx>
        {`
          .spinner {
            margin: 20px auto 0;
            width: 70px;
            text-align: center;
          }

          .spinner > div {
            width: 18px;
            height: 18px;
            background-color: #2587ff;

            border-radius: 100%;
            display: inline-block;
            -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            animation: sk-bouncedelay 1.4s infinite ease-in-out both;
          }

          .spinner .bounce1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
          }

          .spinner .bounce2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
          }

          @-webkit-keyframes sk-bouncedelay {
            0%,
            80%,
            100% {
              -webkit-transform: scale(0);
            }
            40% {
              -webkit-transform: scale(1);
            }
          }

          @keyframes sk-bouncedelay {
            0%,
            80%,
            100% {
              -webkit-transform: scale(0);
              transform: scale(0);
            }
            40% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
