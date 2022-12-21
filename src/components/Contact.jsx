import React from "react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <>
      <div className="h-full text-center">
        <div className="mt-24">
          <h1 className="text-4xl font-semibold">Contact me</h1>
          <div className="flex justify-center mt-10 gap-4">
            <button className="border border-black px-1 py-2 rounded-lg duration-100 hover:bg-[#1173dc]">
              <SocialIcon
                url="https://twitter.com/timus_999"
                bgColor="black"
                target="_blank"
              />
            </button>
            <button className="border border-black px-1 py-2 rounded-lg duration-100 hover:bg-[#FF0000]">
              <SocialIcon
                url="https://www.youtube.com/"
                bgColor="black"
                target="_blank"
              />
            </button>
            <button className="border border-black px-1 py-2 rounded-lg duration-100 hover:bg-[#4267B2]">
              <SocialIcon
                url="https://www.facebook.com/profile.php?id=100084079158143&mibextid=ZbWKwL"
                bgColor="black"
                target="_blank"
              />
            </button>
            <button className="border border-black px-1 py-2 rounded-lg duration-100 hover:bg-gray-500">
              <SocialIcon
                url="https://www.github.com/timus999"
                bgColor="black"
                target="_blank"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
