"use client";

import React from "react";
import {
  WhatsappShareButton,
  FacebookShareButton,
  FacebookShareCount,
} from "react-share";

import { usePathname } from "next/navigation";

const SharePost = ({
  postUrl,
  postTitle,
}: {
  postUrl: string;
  postTitle: string;
}) => {
  const pathname = usePathname();

  //if pathname includes /tags/ then return null
  if (pathname?.includes("/tag/")) {
    return null;
  }

  return (
    <div>
      <div
        className="p-5  my-10 rounded"
        style={{ backgroundColor: "rgba(11, 99, 229, 0.03)" }}
      >
        <p className="text-custom_secondary text-2xl font-semibold">
          Share Post
        </p>
        <div className="flex items-center  flex-wrap gap-3 mt-3">
          {/* whatsApp share */}
          <div className="flex gap-8 mt-3">
            <div className="group hover ring-[1px] ring-custom_border hover:ring-custom_primary hover:bg-custom_primary w-9 px-1 pu-1 h-9 rounded-full flex justify-center items-center cursor-pointer">
              <WhatsappShareButton
                url={`https://tabaarakict.vercel.app/blog/posts/${postUrl}`}
                title={`${postTitle} - Tabaarak ICT Solutions`}
                separator=" 𑗅 "
                className="Demo__some-network__share-button"
              >
                {/* <div className="group hover ring-[1px] ring-custom_border hover:ring-custom_primary hover:bg-custom_primary w-9 px-1 pu-1 h-9 rounded-full flex justify-center items-center cursor-pointer"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="258"
                  viewBox="0 0 256 258"
                  className="w-6 h-6"
                >
                  <defs>
                    <linearGradient
                      id="logosWhatsappIcon0"
                      x1="50%"
                      x2="50%"
                      y1="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#1FAF38" />
                      <stop offset="100%" stopColor="#60D669" />
                    </linearGradient>
                    <linearGradient
                      id="logosWhatsappIcon1"
                      x1="50%"
                      x2="50%"
                      y1="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#F9F9F9" />
                      <stop offset="100%" stopColor="#FFF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosWhatsappIcon0)"
                    className="group-hover:fill-background cursor-pointer group-hover:fill-custom_primary"
                    d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                  />
                  <path
                    fill="url(#logosWhatsappIcon1)"
                    className="group-hover:fill-background cursor-pointer group-hover:fill-custom_primary"
                    d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                  />
                  <path
                    fill="#FFF"
                    d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                  />
                </svg>
                {/* </div> */}
              </WhatsappShareButton>
            </div>
          </div>

          {/* facebook share */}
          <div className="flex gap-8 mt-3">
            <div className="group hover ring-[1px] ring-custom_border hover:ring-custom_primary hover:bg-custom_primary w-9 px-1 pu-1 h-9 rounded-full flex justify-center items-center cursor-pointer">
              <FacebookShareButton
                url={`https://tabaarakict.vercel.app/blog/posts/${postUrl}`}
                quote={`${postTitle} - Tabaarak ICT Solutions`}
                hashtag="#tabaarakict"
                className="Demo__some-network__share-button"
              >
                <div className="group hover ring-[1px] ring-custom_border hover:ring-custom_primary hover:bg-custom_primary w-9 px-1 pu-1 h-9 rounded-full flex justify-center items-center cursor-pointer">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                  >
                    <path
                      d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z"
                      fill="#CDCED6"
                      className="group-hover:fill-background cursor-pointer fill-custom_primary"
                    />
                  </svg>
                </div>
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
