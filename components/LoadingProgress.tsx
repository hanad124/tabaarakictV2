"use client";

import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

const LoadingProgress: React.FC = () => {
  const startProgressBar = () => {
    NProgress.start();
  };

  const stopProgressBar = () => {
    NProgress.done();
  };

  Router.events.on("routeChangeStart", startProgressBar);
  Router.events.on("routeChangeComplete", stopProgressBar);
  Router.events.on("routeChangeError", stopProgressBar);

  return (
    <>
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #23ba9e;
          position: fixed;
          z-index: 1031;
          top: 82px;
          left: 0;
          width: 100%;
          height: 2px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #23ba9e, 0 0 5px #23ba9e;
          opacity: 0;
          transform: rotate(3deg) translate(0px, -4px);
        }
        #nprogress .spinner {
          // display: block;
          // position: absolute;
          // right: 0px;
          // width: 100px;
          // height: 100%;
          // box-shadow: 0 0 10px #23ba9e, 0 0 5px #23ba9e;
          opacity: 0;
          // transform: rotate(3deg) translate(0px, -4px);
        }
      `}</style>
    </>
  );
};

export default LoadingProgress;
