import Head from "next/head";
import QRCode from "react-qr-code";
import Tabbar from "../components/tabs";
import { useState, useRef } from "react";
import Nav from "../components/nav";
import Timeline from "../components/timeline";
import Card from "../components/card";
import CardHover from "../components/cardHover";
import IconEmail from "../components/icons/email";
import IconMessage from "../components/icons/message";
import IconPhoneCall from "../components/icons/phone";
import FAQ from "../components/faq";

export default function Home() {
  const [qrCode, setQRCode] = useState("value");
  function generate(val) {
    setQRCode(val);
  }
  const qrRef = useRef(null);

  const downloadQRCode = () => {
    const svg = qrRef.current.querySelector("svg");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const image64 = "data:image/svg+xml;base64," + svg64;

    const img = new Image();
    img.onload = () => {
      const padding = 20; // Add padding
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;

      // Fill the canvas with white color
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the image with padding
      ctx.drawImage(img, padding, padding);

      const png = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = png;
      link.download = "QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = image64;
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.22/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12 hover:shadow-lg">
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
            <div className="flex flex-col items-center w-full">
              <div className="bg-white shadow-lg p-6 rounded-lg" ref={qrRef}>
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
              <button
                onClick={downloadQRCode}
                className="px-6 py-3 mt-6 text-white bg-blue-600 rounded-xl hover:shadow-lg hover:scale-115 hover:bg-blue-700"
              >
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            What QR Code Will You Create Today?
          </h2>

          <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}

            <CardHover
              title="Mobile Friendly"
              content="Generate QR codes optimized for smartphones."
              Icon={() => <IconMessage />}
            />
            <CardHover
              title="Effortless Email QR Codes"
              content="Generate QR codes that pre-fill emails with subjects and messages instantly."
              Icon={() => <IconEmail />}
            />

            <CardHover
              title="Quick-Call QR Codes"
              content="Let users dial numbers instantly—ideal for business cards and promotions."
              Icon={() => <IconPhoneCall />}
            />
          </div>
        </div>
      </section>

      <Timeline />
      <FAQ />

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
