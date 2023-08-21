import React from 'react'

const ServicesCards = () => {
  return (
    <div>
        <div className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-10">
        <h2 className="text-custom_secondary text-2xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-3xl md:mx-7 text-center lg:mx-10 mb-0">
          We run all kinds of IT services
        </h2>
        <div className="mt-16 flex flex-col justify-center gap-10 md:flex-row md:flex-wrap">
          {/* single service 1*/}
          <div className="group bg-background hover:bg-custom_primary rounded-md  p-7 md:w-[360px] flex flex-col shadow-custom_shadow border border-custom_border">
            <div className="flex justify-center flex-1">
              <div className=" bg-custom_primary/10 px-3 py-2 rounded-md group-hover:bg-white/10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M34 0H2C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0Z"
                    fill="#0B63E5"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M9 12.375L4.09373 16.4636C3.13422 17.2631 3.13422 18.7369 4.09373 19.5364L9 23.625"
                    fill="#0B63E5"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M9 12.375L4.09373 16.4636C3.13422 17.2631 3.13422 18.7369 4.09373 19.5364L9 23.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M27 12.375L31.9063 16.4636C32.8658 17.2631 32.8658 18.7369 31.9063 19.5364L27 23.625"
                    fill="#0B63E5"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M27 12.375L31.9063 16.4636C32.8658 17.2631 32.8658 18.7369 31.9063 19.5364L27 23.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M22.5 5.625L13.5 30.375"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>

            <p className="text-center pt-6 text-lg font-bold text-custom_secondary group-hover:text-background flex-1">
              Software Development
            </p>
            <p className="text-center text-custom_textColor leading-relaxed my-4 group-hover:text-custom_border flex-1">
              Tailored software solutions that streamline processes and drive
              growth.
            </p>
            <div className="flex justify-center gap-2 text-custom_primary cursor-pointer hover:underline group-hover:text-background">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          {/* single service 2*/}
          <div className="group bg-background hover:bg-custom_primary rounded-md shadow-custom_shadow border border-custom_border p-7 md:w-[360px] flex flex-col ">
            <div className="flex justify-center flex-1">
              <div className=" bg-custom_primary/10 group-hover:bg-white/10  px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M11.0677 23.486C9.73 22.4413 8.64653 21.1068 7.89872 19.5831C7.15091 18.0593 6.75822 16.3859 6.75017 14.6886C6.71648 8.59073 11.6325 3.52175 17.7287 3.37826C20.091 3.32138 22.4113 4.00976 24.3604 5.34576C26.3094 6.68176 27.7884 8.59754 28.5874 10.8214C29.3863 13.0452 29.4648 15.4641 28.8117 17.7351C28.1586 20.006 26.807 22.0136 24.9487 23.4732C24.5393 23.7903 24.2075 24.1964 23.9782 24.6606C23.7489 25.1248 23.6281 25.6351 23.625 26.1529L23.625 27.0001C23.625 27.2984 23.5065 27.5846 23.2955 27.7956C23.0845 28.0065 22.7984 28.1251 22.5 28.1251H13.5C13.2016 28.1251 12.9155 28.0065 12.7045 27.7956C12.4935 27.5846 12.375 27.2984 12.375 27.0001L12.375 26.152C12.3737 25.6375 12.2553 25.1301 12.0288 24.6682C11.8023 24.2063 11.4736 23.8021 11.0677 23.486V23.486Z"
                    fill="#0B63E5"
                  />
                  <path
                    d="M12.375 32.625H23.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M18 28.125V20.25"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M13.5 15.75L18 20.25L22.5 15.75"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M11.0677 23.486C9.73 22.4413 8.64653 21.1068 7.89872 19.5831C7.15091 18.0593 6.75822 16.3859 6.75017 14.6886C6.71648 8.59073 11.6325 3.52175 17.7287 3.37826C20.091 3.32138 22.4113 4.00976 24.3604 5.34576C26.3094 6.68176 27.7884 8.59754 28.5874 10.8214C29.3863 13.0452 29.4648 15.4641 28.8117 17.7351C28.1586 20.006 26.807 22.0136 24.9487 23.4732C24.5393 23.7903 24.2075 24.1964 23.9782 24.6606C23.7489 25.1248 23.6281 25.6351 23.625 26.1529L23.625 27.0001C23.625 27.2984 23.5065 27.5846 23.2955 27.7956C23.0845 28.0065 22.7984 28.1251 22.5 28.1251H13.5C13.2016 28.1251 12.9155 28.0065 12.7045 27.7956C12.4935 27.5846 12.375 27.2984 12.375 27.0001L12.375 26.152C12.3737 25.6375 12.2553 25.1301 12.0288 24.6682C11.8023 24.2063 11.4736 23.8021 11.0677 23.486V23.486Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>

            <p className="text-center pt-6 text-lg font-bold text-custom_secondary group-hover:text-background flex-1">
              Mobile App Development
            </p>
            <p className="text-center text-custom_textColor group-hover:text-custom_border leading-relaxed my-4 flex-1">
              Engaging and functional mobile apps for seamless user experiences.
            </p>
            <div className="flex justify-center gap-2 text-custom_primary cursor-pointer hover:underline group-hover:text-background">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="group-hover:stroke-white"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          {/* single service 3*/}
          <div className="group hover:bg-custom_primary bg-background rounded-md shadow-custom_shadow border border-custom_border p-7 md:w-[360px]">
            <div className="flex justify-center">
              <div className=" bg-custom_primary/10 group-hover:bg-white/10 px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <path
                    d="M18.0007 21.3755V34.8755"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M18.0007 21.3755C19.554 21.3755 20.8132 20.1163 20.8132 18.563C20.8132 17.0097 19.554 15.7505 18.0007 15.7505C16.4474 15.7505 15.1882 17.0097 15.1882 18.563C15.1882 20.1163 16.4474 21.3755 18.0007 21.3755Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M10.1257 10.1255V4.50049C10.1257 4.20212 10.2443 3.91597 10.4552 3.70499C10.6662 3.49401 10.9524 3.37549 11.2507 3.37549H24.7507C25.0491 3.37549 25.3352 3.49401 25.5462 3.70499C25.7572 3.91597 25.8757 4.20212 25.8757 4.50049V10.1255"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M10.1258 10.1255L6.27459 17.9204C6.1832 18.1054 6.14444 18.3119 6.16254 18.5175C6.18064 18.723 6.25491 18.9196 6.37722 19.0857L18.0008 34.8755L29.6244 19.0856C29.7467 18.9195 29.821 18.7229 29.8391 18.5174C29.8572 18.3119 29.8184 18.1054 29.727 17.9204L25.8758 10.1255H10.1258Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>

            <p className="group-hover:text-background text-center pt-6 text-lg font-bold text-custom_secondary">
              Bulk sms Api
            </p>
            <p className="group-hover:text-custom_border  text-center text-custom_textColor leading-relaxed my-4">
              fficiently reach and engage your audience with our powerful SMS
              integration.
            </p>
            <div className="flex justify-center gap-2 text-custom_primary cursor-pointer hover:underline group-hover:text-white">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          {/* single service 4*/}
          <div className="group bg-background hover:bg-custom_primary rounded-md shadow-custom_shadow border border-custom_border p-7 md:w-[360px] flex flex-col ">
            <div className="flex justify-center flex-1">
              <div className=" bg-custom_primary/10 group-hover:bg-white/10 px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M28.125 6.75H7.875C7.72726 6.75 7.58097 6.7791 7.44448 6.83563C7.30799 6.89217 7.18397 6.97504 7.0795 7.0795C6.97504 7.18397 6.89217 7.30799 6.83563 7.44448C6.7791 7.58097 6.75 7.72726 6.75 7.875V28.125C6.75 28.2727 6.7791 28.419 6.83563 28.5555C6.89217 28.692 6.97504 28.816 7.0795 28.9205C7.18397 29.025 7.30799 29.1078 7.44448 29.1644C7.58097 29.2209 7.72726 29.25 7.875 29.25H28.125C28.2727 29.25 28.419 29.2209 28.5555 29.1644C28.692 29.1078 28.816 29.025 28.9205 28.9205C29.025 28.816 29.1078 28.692 29.1644 28.5555C29.2209 28.419 29.25 28.2727 29.25 28.125V7.875C29.25 7.72726 29.2209 7.58097 29.1644 7.44448C29.1078 7.30799 29.025 7.18397 28.9205 7.0795C28.816 6.97504 28.692 6.89217 28.5555 6.83563C28.419 6.7791 28.2727 6.75 28.125 6.75V6.75ZM21.9375 21.9375H14.0625V14.0625H21.9375V21.9375Z"
                    fill="#0B63E5"
                  />
                  <path
                    d="M21.9375 14.0625H14.0625V21.9375H21.9375V14.0625Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M28.125 6.75H7.875C7.25368 6.75 6.75 7.25368 6.75 7.875V28.125C6.75 28.7463 7.25368 29.25 7.875 29.25H28.125C28.7463 29.25 29.25 28.7463 29.25 28.125V7.875C29.25 7.25368 28.7463 6.75 28.125 6.75Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M29.25 14.625H32.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M29.25 21.375H32.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M3.375 14.625H6.75"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M3.375 21.375H6.75"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M21.375 29.25V32.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M14.625 29.25V32.625"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M21.375 3.375V6.75"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M14.625 3.375V6.75"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>

            <p className="group-hover:text-background text-center pt-6 text-lg font-bold text-custom_secondary flex-1">
              Web design & Hosting
            </p>
            <p className="group-hover:text-custom_border text-center text-custom_textColor leading-relaxed my-4 flex-1">
              Captivating web design and reliable hosting for a strong online
              presence.
            </p>
            <div className="group-hover:text-background flex justify-center gap-2 text-custom_primary cursor-pointer hover:underline">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-background"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-background"
                />
              </svg>
            </div>
          </div>
          {/* single service 5*/}
          <div className="group bg-background hover:bg-custom_primary  rounded-md shadow-custom_shadow border border-custom_border p-7 md:w-[360px] flex flex-col">
            <div className="flex justify-center flex-1">
              <div className=" bg-custom_primary/10 group-hover:bg-white/10 px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M18 18C24.8345 18 30.375 14.9779 30.375 11.25C30.375 7.52208 24.8345 4.5 18 4.5C11.1655 4.5 5.625 7.52208 5.625 11.25C5.625 14.9779 11.1655 18 18 18Z"
                    fill="#0B63E5"
                  />
                  <path
                    d="M18 18C24.8345 18 30.375 14.9779 30.375 11.25C30.375 7.52208 24.8345 4.5 18 4.5C11.1655 4.5 5.625 7.52208 5.625 11.25C5.625 14.9779 11.1655 18 18 18Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M5.625 11.25V18C5.625 21.7279 11.1655 24.75 18 24.75C24.8345 24.75 30.375 21.7279 30.375 18V11.25"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M5.625 18V24.75C5.625 28.4779 11.1655 31.5 18 31.5C24.8345 31.5 30.375 28.4779 30.375 24.75V18"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>

            <p className="text-center group-hover:text-background pt-6 text-lg font-bold text-custom_secondary flex-1">
              IT Consultant{" "}
            </p>
            <p className="text-center text-custom_textColor leading-relaxed my-4  group-hover:text-custom_border flex-1">
              Strategic guidance to align technology with business goals.
            </p>
            <div className="flex justify-center gap-2 text-custom_primary cursor-pointer hover:underline  group-hover:text-background ">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
          {/* single service 6*/}
          <div className="group bg-background 10 hover:bg-custom_primary rounded-md shadow-custom_shadow border border-custom_border p-7 md:w-[360px] flex flex-col ">
            <div className="flex justify-center flex-1">
              <div className=" bg-custom_primary/10 10 group-hover:bg-white/10  px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    opacity="0.2"
                    d="M4.65579 10.4929C4.55376 10.666 4.49996 10.8632 4.5 11.0641V24.9357C4.5 25.1353 4.55311 25.3313 4.65389 25.5037C4.75467 25.676 4.89947 25.8184 5.07346 25.9162L17.4485 32.8772C17.6168 32.9719 17.8068 33.0217 18 33.0216L18.0015 33.0216L18.1335 17.9999L4.65581 10.4929L4.65579 10.4929Z"
                    fill="#0B63E5"
                  />
                  <path
                    d="M31.5 24.9358V11.0642C31.5 10.8646 31.4469 10.6686 31.3461 10.4963C31.2453 10.3239 31.1005 10.1816 30.9265 10.0837L18.5515 3.12275C18.3832 3.02803 18.1932 2.97827 18 2.97827C17.8068 2.97827 17.6168 3.02803 17.4485 3.12275L5.07346 10.0837C4.89947 10.1816 4.75467 10.3239 4.65389 10.4963C4.55311 10.6686 4.5 10.8646 4.5 11.0642V24.9358C4.5 25.1354 4.55311 25.3314 4.65389 25.5038C4.75467 25.6761 4.89947 25.8185 5.07346 25.9163L17.4485 32.8773C17.6168 32.972 17.8068 33.0217 18 33.0217C18.1932 33.0217 18.3832 32.972 18.5515 32.8773L30.9265 25.9163C31.1005 25.8185 31.2453 25.6761 31.3461 25.5038C31.4469 25.3314 31.5 25.1354 31.5 24.9358Z"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M24.8937 21.4469V14.1344L11.25 6.60938"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M31.3448 10.4943L18.1334 17.9999L4.65576 10.4929"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M18.1335 18L18.0015 33.0217"
                    stroke="#0B63E5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </div>
            </div>

            <p className="text-center pt-6 text-lg font-bold text-custom_secondary group-hover:text-background flex-1">
              Network Infrastructure
            </p>
            <p className="text-center text-custom_textColor group-hover:text-custom_border leading-relaxed my-4 flex-1">
              Secure and scalable networks for seamless connectivity and
              communication.
            </p>
            <div className="flex justify-center gap-2 text-custom_primary cursor-pointer hover:underline group-hover:text-background">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCards