import { Button } from "@/components/ui/button";
import ContactInfo from "./ContactInfo";

const Form = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row mt-16">
      {/* Contact Info */}
      <ContactInfo />
      <div className="md:w-1/2 p-7">
        {/* Form */}
        <form>
          <div className="flex items-center gap-3 w-full justify-between mb-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-custom_secondary text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border  text-custom_secondary border-gray-300 rounded-md focus:outline-none text-sm focus:ring-2 focus:ring-blue-400"
                placeholder="Full name"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-sm text-custom_secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2  text-sm text-custom_secondary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-sm  text-custom_secondary"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border  text-sm text-custom_secondary border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block mb-2 font-medium  text-sm text-custom_secondary"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-2 border  text-sm text-custom_secondary 
              border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Company"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-sm text-custom_secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here"
              className="w-full px-4 py-2 border  text-sm text-custom_secondary border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <Button
            size={"lg"}
            type="submit"
            className="px-4 py-2 bg-custom_primary flex items-center gap-2 hover:gap-3 transition-all text-white rounded-md hover:bg-blue-600"
          >
            <span>Send Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.75 12H20.25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
