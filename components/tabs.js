import { useState } from "react";
import {
  GenerateEmailQRCode,
  GeneratePhoneQRCode,
  GenerateSMSQRCode,
  GenerateURLQRCode,
} from "../utils/utils";
import BtnGenerate from "./generateBtn";

export default function QRCodeTabBar({ generate = () => {} }) {
  const [activeTab, setActiveTab] = useState("mobile"); // Default tab
  const [formData, setFormData] = useState({
    mobile: "",
    email: { address: "", subject: "", body: "" },
    sms: { phone: "", message: "" },
  });

  const handleSubmit = (tab) => {
    // Handle form submission based on active tab
    try {
      if (tab === "mobile") {
        generate(GeneratePhoneQRCode(formData.mobile));
        console.log("Mobile QR Code Data:", formData.mobile);
      } else if (tab === "email") {
        generate(
          GenerateEmailQRCode(
            formData.email.address,
            formData.email.subject,
            formData.email.body
          )
        );
        console.log("Email QR Code Data:", formData.email);
      } else if (tab === "sms") {
        generate(GenerateSMSQRCode(formData.sms.phone, formData.sms.message));
        console.log("SMS QR Code Data:", formData.sms);
      } else if (tab === "Url") {
        generate(GenerateURLQRCode(formData.Url));
        console.log("URL QR Code Data:", formData.Url);
      } else {
        generate(formData.text);
      }
    } catch (e) {
      alert(
        e?.message ||
          "An error occurred while generating the QR code. Please try again."
      );
    }
  };

  return (
    <div className="w-full max-w-xl p-4">
      {/* TabBar */}

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-white-900 dark:border-gray-700">
        <ul className="pb-8 flex flex-wrap -mb-px">
          {["mobile", "email", "sms", "url", "text"].map((tab) => (
            <li
              key={tab}
              className={`me-2 ${
                activeTab === tab ? "text-blue-600" : "hover:text-gray-600"
              }`}
            >
              <button
                className={`inline-block p-4 border-b-2 ${
                  activeTab === tab
                    ? "border-blue-600 dark:border-blue-500"
                    : "border-transparent hover:border-gray-300"
                } rounded-t-lg`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
                {/* Capitalize Tab */}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Forms */}
      <div className="p-4 bg-white">
        {activeTab === "mobile" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("mobile");
            }}
          >
            <label className="block mb-2 text-gray-700">
              Mobile Number:
              <input
                type="text"
                className="block w-full p-2 bg-white text-gray-900 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
              />
            </label>
            <BtnGenerate />
          </form>
        )}
        {activeTab === "text" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("text");
            }}
          >
            <label className="block mb-2 text-gray-700">
              Text:
              <textarea
                type="text"
                className="block w-full bg-white text-grey-900 border p-2 border border-gray-300 rounded h-32"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                required
              ></textarea>
            </label>
            <BtnGenerate />
          </form>
        )}
        {activeTab == "url" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("Url");
            }}
          >
            <label className="block mb-2 text-gray-700">
              URL:
              <input
                type="text"
                className="block w-full bg-white text-gray-900   p-2 border border-gray-300 rounded"
                value={formData.Url}
                onChange={(e) =>
                  setFormData({ ...formData, Url: e.target.value })
                }
                required
              />
            </label>
            <BtnGenerate />
          </form>
        )}
        {activeTab === "email" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("email");
            }}
          >
            <label className="block mb-2 text-gray-700">
              Email Address:
              <input
                type="email"
                className="block w-full bg-white text-gray-900   p-2 border border-gray-300 rounded"
                value={formData.email.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: { ...formData.email, address: e.target.value },
                  })
                }
                required
              />
            </label>
            <label className="block mb-2 text-gray-700">
              Subject:
              <input
                type="text"
                className="block w-full bg-white text-gray-900  p-2 border border-gray-300 rounded"
                value={formData.email.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: { ...formData.email, subject: e.target.value },
                  })
                }
              />
            </label>
            <label className="block mb-2 text-gray-700">
              Message:
              <textarea
                className="block w-full p-2 bg-white text-gray-900  border border-gray-300 rounded"
                value={formData.email.body}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: { ...formData.email, body: e.target.value },
                  })
                }
              ></textarea>
            </label>
            <BtnGenerate />
          </form>
        )}
        {activeTab === "sms" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("sms");
            }}
          >
            <label className="block mb-2 text-gray-700">
              Phone Number:
              <input
                type="text"
                className="block w-full p-2 bg-white text-gray-900  border border-gray-300 rounded"
                value={formData.sms.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sms: { ...formData.sms, phone: e.target.value },
                  })
                }
                required
              />
            </label>
            <label className="block mb-2 text-gray-700">
              Message:
              <textarea
                className="block w-full p-2 border bg-white text-gray-900  border-gray-300 rounded"
                value={formData.sms.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sms: { ...formData.sms, message: e.target.value },
                  })
                }
              ></textarea>
            </label>
            <BtnGenerate />
          </form>
        )}
      </div>
    </div>
  );
}
