import React, { useState } from "react";

const Contact = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [contactDataInfo, setContactDataInfo] = useState("");

  const handleEmailChange = (e) => {
    setEmailInfo(e.target.value);
  };

  const handleContactDataChange = (e) => {
    setContactDataInfo(e.target.value);
  };

  //Handle Form Data
  const HandleSubmit = async () => {
    try {
      const response = await fetch(`/devonboard/api/v1/inquires`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInfo,
          contactData: contactDataInfo,
        }),
      });
      const data = await response.json();
      console.log("Server Response:", data);
      setEmailInfo("");
      setContactDataInfo("");
    } catch (error) {

      console.error("Error:", error);
      setEmailInfo("");
      setContactDataInfo("");

    }
  };

  return (
    <>
      <section class="relative pb-24 ">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 id="contact" class="mb-5 text-6xl font-semibold text-white">
              Contact Us
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Let’s turn your idea into a launch-ready product — start the
              conversation today.
            </h1>
            <div>
              <input
                type="text"
                placeholder="jack@example.com"
                name="email"
                value={emailInfo}
                onChange={handleEmailChange}
                class="border border-gray-600 w-70/100 mt-5 pr-2 pl-2 py-3  rounded-md text-white font-semibold hover:border-gray-700 bg-black"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Write Here"
                name="contactData"
                value={contactDataInfo}
                onChange={handleContactDataChange}
                class="border border-gray-600 h-50 w-70/100 pr-2 pl-2 py-3 mt-2 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
              />
            </div>
            <button
              class="inline-flex items-center px-14 py-3 mt-8 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
              onClick={HandleSubmit}
            >
              <span class="justify-center mt">Subscribe</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
