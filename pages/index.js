import Head from "next/head";
import QRCode from "react-qr-code";
import Tabbar from "../components/tabs";
import { useState } from "react";
import Nav from "../components/nav";

export default function Home() {
  const [qrCode, setQRCode] = useState("value");
  function generate(val) {
    setQRCode(val);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            QR Code Generator Made Simple
          </h1>
          <p className="text-lg">
            Create QR codes for mobile numbers, email addresses, SMS, and more
            with just a few clicks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center">
        {/* Tabs and QR Code Section */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Tabs */}
          <div className="w-full md:w-1/2 p-4">
            <Tabbar generate={generate} />
          </div>

          {/* QR Code Display */}
          <div className="flex items-center justify-center w-full md:w-1/2 p-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={qrCode}
                viewBox={`0 0 256 256`}
              />
              <p className="text-center text-sm text-gray-600 mt-2">
                Your generated QR code will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Use Our QR Code Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-8">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/images/img.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Direct Dial QR Codes
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Instantly connect users to phone numbers with a simple scan. Perfect for
                business cards, promotional materials, and customer support.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/images/img.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Email Integration
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Simplify email contact by generating QR codes that automatically
                open a new email with pre-filled subject and message lines.
                </p>
              </div>
            </a>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src="/images/img.jpg"
                alt="Mobile Friendly"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Mobile Friendly</h3>
              <p className="text-sm text-gray-600">
                Generate QR codes optimized for smartphones.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src="/images/img1.jpg"
                alt="Email Integration"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg"> Website QR Codes</h3>
              <p className="text-sm text-gray-600">
                Create QR codes for email addresses with pre-filled subjects and
                messages.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src="images/img1.jpg"
                alt="SMS Ready"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">SMS Ready</h3>
              <p className="text-sm text-gray-600">
                Generate QR codes for quick SMS messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} QR Code Generator. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
