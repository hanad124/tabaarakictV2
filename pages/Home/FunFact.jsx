"use client";

import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FunFact = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-custom_primary font-bold text-lg flex justify-center items-center gap-2">
          <p> Experience matters</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.6667 5.8335H3.33341C2.41294 5.8335 1.66675 6.57969 1.66675 7.50016V15.8335C1.66675 16.754 2.41294 17.5002 3.33341 17.5002H16.6667C17.5872 17.5002 18.3334 16.754 18.3334 15.8335V7.50016C18.3334 6.57969 17.5872 5.8335 16.6667 5.8335Z"
              stroke="#0B63E5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3334 17.5V4.16667C13.3334 3.72464 13.1578 3.30072 12.8453 2.98816C12.5327 2.67559 12.1088 2.5 11.6667 2.5H8.33341C7.89139 2.5 7.46746 2.67559 7.1549 2.98816C6.84234 3.30072 6.66675 3.72464 6.66675 4.16667V17.5"
              stroke="#0B63E5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Our Company Growth
        </h2>
        <p className="text-custom_textColor my-3 leading-relaxed text-center mx-3 lg:mx-80 md:mx-36">
          To meet our customer’s demands, we give clear navigation.
        </p>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          <>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-16">
              <div
                className="flex  gap-5  py-5 px-5 rounded-md  justify-center md:justify-start"
                style={{
                  borderRadius: "12px",
                  background: "var(--tertiary-50, #F1EBFF)",
                }}
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M12.25 12.25V24.3023C12.25 32.9868 19.1963 40.1852 27.8806 40.2496C29.9589 40.2653 32.0198 39.8696 33.9444 39.0851C35.8691 38.3007 37.6194 37.1431 39.0946 35.6791C40.5698 34.215 41.7407 32.4735 42.5396 30.5548C43.3386 28.6362 43.75 26.5784 43.75 24.5V12.25C43.75 11.7859 43.5656 11.3408 43.2374 11.0126C42.9092 10.6844 42.4641 10.5 42 10.5H14C13.5359 10.5 13.0908 10.6844 12.7626 11.0126C12.4344 11.3408 12.25 11.7859 12.25 12.25Z"
                      fill="#7534FF"
                    />
                    <path
                      d="M12.25 12.25V24.3023C12.25 32.9868 19.1963 40.1852 27.8806 40.2496C29.9589 40.2653 32.0198 39.8696 33.9444 39.0851C35.8691 38.3007 37.6194 37.1431 39.0946 35.6791C40.5698 34.215 41.7407 32.4735 42.5396 30.5548C43.3386 28.6362 43.75 26.5784 43.75 24.5V12.25C43.75 11.7859 43.5656 11.3408 43.2374 11.0126C42.9092 10.6844 42.4641 10.5 42 10.5H14C13.5359 10.5 13.0908 10.6844 12.7626 11.0126C12.4344 11.3408 12.25 11.7859 12.25 12.25Z"
                      stroke="#7534FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 49H35"
                      stroke="#7534FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 40.25V49"
                      stroke="#7534FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M43.3599 28H45.5002C47.3567 28 49.1372 27.2625 50.4499 25.9497C51.7627 24.637 52.5002 22.8565 52.5002 21V17.5C52.5002 17.0359 52.3158 16.5908 51.9876 16.2626C51.6594 15.9344 51.2143 15.75 50.7502 15.75H43.7502"
                      stroke="#7534FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.6796 28H10.4722C8.61565 28 6.83517 27.2625 5.52242 25.9497C4.20967 24.637 3.47217 22.8565 3.47217 21V17.5C3.47217 17.0359 3.65654 16.5908 3.98473 16.2626C4.31292 15.9344 4.75804 15.75 5.22217 15.75H12.2222"
                      stroke="#7534FF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-custom_primary text-4xl font-medium">
                    {counterOn && (
                      <CountUp start={0} end={17} duration={2} delay={0} />
                    )}
                    +
                  </div>
                  <p className="text-custom_secondary md:text-md md:font-md font-sm uppercase">
                    AWARDS REWARDED
                  </p>
                </div>
              </div>
              <div
                className="flex  gap-5  py-5 px-5 rounded-md   justify-center md:justify-start"
                style={{
                  borderRadius: "12px",
                  background: "var(--alcohol-50, #FEEDFA)",
                }}
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M27.9998 33.25C20.6274 33.2616 13.3831 31.3235 7.00146 27.6322V45.5C7.00146 45.7298 7.04673 45.9574 7.13467 46.1697C7.22262 46.382 7.35152 46.575 7.51402 46.7375C7.67653 46.9 7.86945 47.0289 8.08177 47.1168C8.29409 47.2048 8.52165 47.25 8.75146 47.25H47.2515C47.4813 47.25 47.7088 47.2048 47.9212 47.1168C48.1335 47.0289 48.3264 46.9 48.4889 46.7375C48.6514 46.575 48.7803 46.382 48.8683 46.1697C48.9562 45.9574 49.0015 45.7298 49.0015 45.5V27.6301C42.619 31.3228 35.3734 33.2616 27.9998 33.25Z"
                      fill="#F249C8"
                    />
                    <path
                      d="M47.2515 15.75H8.75146C7.78497 15.75 7.00146 16.5335 7.00146 17.5V45.5C7.00146 46.4665 7.78497 47.25 8.75146 47.25H47.2515C48.218 47.25 49.0015 46.4665 49.0015 45.5V17.5C49.0015 16.5335 48.218 15.75 47.2515 15.75Z"
                      stroke="#F249C8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.75 15.75V12.25C36.75 11.3217 36.3813 10.4315 35.7249 9.77513C35.0685 9.11875 34.1783 8.75 33.25 8.75H22.75C21.8217 8.75 20.9315 9.11875 20.2751 9.77513C19.6187 10.4315 19.25 11.3217 19.25 12.25V15.75"
                      stroke="#F249C8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M49.0018 27.6301C42.6193 31.3227 35.3737 33.2616 28 33.25C20.6276 33.2616 13.3832 31.3234 7.00146 27.632"
                      stroke="#F249C8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.375 26.25H30.625"
                      stroke="#F249C8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-custom_primary   text-4xl font-medium">
                    {counterOn && (
                      <CountUp start={0} end={18} duration={2} delay={0} />
                    )}
                    +
                  </div>
                  <p className="text-custom_secondary md:text-md md:font-md font-sm uppercase">
                    YEARS OF EXPERIENCE
                  </p>
                </div>
              </div>
              <div
                className="flex  gap-5  py-5 px-5 rounded-md  justify-center md:justify-start"
                style={{
                  borderRadius: "12px",
                  background: " var(--secondary-50, #FFF9EE)",
                }}
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z"
                      fill="#FF8800"
                    />
                    <path
                      d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z"
                      stroke="#FF8800"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M37.0952 33.2493C36.1727 34.8449 34.8467 36.1697 33.2502 37.0908C31.6538 38.0119 29.8431 38.4967 28 38.4967C26.157 38.4968 24.3463 38.0119 22.7498 37.0909C21.1534 36.1698 19.8273 34.845 18.9048 33.2494"
                      stroke="#FF8800"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.25 23.625C21.25 24.2463 20.7463 24.75 20.125 24.75C19.5037 24.75 19 24.2463 19 23.625C19 23.0037 19.5037 22.5 20.125 22.5C20.7463 22.5 21.25 23.0037 21.25 23.625Z"
                      fill="#FF8800"
                      stroke="#FF8800"
                      strokeWidth="3"
                    />
                    <path
                      d="M37 23.625C37 24.2463 36.4963 24.75 35.875 24.75C35.2537 24.75 34.75 24.2463 34.75 23.625C34.75 23.0037 35.2537 22.5 35.875 22.5C36.4963 22.5 37 23.0037 37 23.625Z"
                      fill="#FF8800"
                      stroke="#FF8800"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-custom_primary   text-4xl font-medium">
                    {counterOn && (
                      <CountUp start={0} end={183} duration={2} delay={0} />
                    )}
                    +
                  </div>
                  <p className="text-custom_secondary md:text-md md:font-md font-sm uppercase">
                    HAPPY CLIENTS
                  </p>
                </div>
              </div>
              <div
                className="flex  gap-5  py-5 px-5 rounded-md justify-center md:justify-start"
                style={{
                  borderRadius: "12px",
                  background: "var(--success-50, #E7F5E8)",
                }}
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M19.25 35C25.5322 35 30.625 29.9072 30.625 23.625C30.625 17.3428 25.5322 12.25 19.25 12.25C12.9678 12.25 7.875 17.3428 7.875 23.625C7.875 29.9072 12.9678 35 19.25 35Z"
                      fill="#0F9918"
                    />
                    <path
                      d="M19.25 35C25.5322 35 30.625 29.9072 30.625 23.625C30.625 17.3428 25.5322 12.25 19.25 12.25C12.9678 12.25 7.875 17.3428 7.875 23.625C7.875 29.9072 12.9678 35 19.25 35Z"
                      stroke="#0F9918"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M33.9966 12.6736C35.5611 12.2328 37.202 12.1324 38.8086 12.3791C40.4152 12.6259 41.9503 13.214 43.3105 14.104C44.6706 14.994 45.8243 16.1651 46.6938 17.5385C47.5632 18.9118 48.1283 20.4556 48.3509 22.0657C48.5735 23.6759 48.4484 25.315 47.9842 26.8728C47.5199 28.4305 46.7273 29.8707 45.6596 31.0963C44.5919 32.3219 43.2739 33.3045 41.7945 33.9779C40.3151 34.6512 38.7085 34.9997 37.0831 34.9999"
                      stroke="#0F9918"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.49902 43.1805C5.27557 40.6535 7.63404 38.5911 10.3753 37.1673C13.1166 35.7435 16.1602 35.0001 19.2492 35C22.3382 34.9999 25.3819 35.743 28.1233 37.1666C30.8646 38.5902 33.2233 40.6525 35 43.1793"
                      stroke="#0F9918"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37.083 35C40.1723 34.9978 43.2166 35.74 45.9582 37.1637C48.6998 38.5875 51.058 40.6509 52.8331 43.1793"
                      stroke="#0F9918"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-custom_primary   text-4xl font-medium">
                    {counterOn && (
                      <CountUp start={0} end={315} duration={2} delay={0} />
                    )}
                    +
                  </div>
                  <p className="text-custom_secondary md:text-md md:font-md font-sm uppercase">
                    COMPLETED PROJECT
                  </p>
                </div>
              </div>
            </div>
          </>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default FunFact;
