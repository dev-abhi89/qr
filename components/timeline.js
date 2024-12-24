export default function Timeline() {
  return (
    <section className="bg-gray-100 mt-11 mb-0 mx-4 ">
      <div className="container pt-11 pb-10 lg:pb-9 lg:pb-0 relative mx-auto z-[1]">
        <h2 className="text-center pt-0 mb-3 hover:text-gray-600 transition-transform duration-300  font-medium text-xl lg:text-2xl">
          3 Simple Steps to Creating a Free QR Code
        </h2>
        <p className="text-center text-gray-500 mb-5 lg:pb-5">
          To create a free customised QR code, simply follow these easy
          instructions.
        </p>

        {/* Stepper Rows */}
        <div className="stepper-row flex flex-col lg:flex-row justify-center px-12 pt-12   mx-auto max-w-fit">
          {/* Step 1 */}
          <div className="lg:w-1/3 flex flex-col justify-start mb-5">
            <img
              className="w-full h-auto object-cover"
              src="/images/imgg1.png"
              alt="Choose the QR Code type"
            />
          </div>
          <hr />

          <div className="lg:w-1/2 flex flex-col justify-start">
            <h3 className="text-lg font-medium mb-2">
              Step 1: Choose the Type of QR Code.
            </h3>
            <p className="text-gray-500">
              Select the ideal type of QR Code for your requirements. URL links,
              PDFs, Multi-URL, and other options are available. Keep in mind
              that dynamic QR codes are modifiable at any moment, providing
              flexibility and improved performance tracking, but static QR codes
              cannot be altered once they are created.
            </p>
          </div>
        </div>
        <div className="stepper-row flex flex-col justify-center lg:flex-row px-12 pt-12  mx-auto max-w-fit">
          {/* Step 1 */}
          <div className="lg:w-1/2 flex flex-col justify-start">
            <h3 className="text-lg font-medium mb-2">
              Step 2: Customise and Enter Details
            </h3>
            <p className="text-gray-500">
              Enter the necessary data in the appropriate fields. To improve
              your QR Code, use the customisation options. You may add a logo,
              alter the colours, or change the styles to better fit your
              identity. A well-designed QR Code raises visibility and user
              engagement.
            </p>
          </div>

          <div className="lg:w-1/4 flex flex-col justify-start mb-5">
            <img
              className="w-full h-auto object-cover"
              src="/images/imgg2.png"
              alt="Choose the QR Code type"
            />
          </div>
        </div>
        <div className="stepper-row flex flex-col lg:flex-row justify-center px-12 pt-12  mx-auto max-w-fit">
          {/* Step 1 */}
          <div className="lg:w-1/4 flex flex-col justify-start mb-5">
            <img
              className="w-full h-full object-cover"
              src="/images/imgg4.png"
              alt="Choose the QR Code type"
            />
          </div>
          <hr />
          <div className="lg:w-1/2 flex flex-col justify-start">
            <h3 className="text-lg font-medium mb-2">
              Step 3: Get Your QR Code Here
            </h3>
            <p className="text-gray-500">
              Choose the file size and format that you want. Start using the
              personalised QR Code right away after downloading it. Track
              performance and improve your approach with dynamic QR Codes by
              keeping an eye on scans and accessing insights.
            </p>
          </div>
        </div>
        {/* Repeat for Steps 2 and 3 */}
        {/* Add button */}
        <div className="text-center mt-6">
          <a
            href="https://app.the-qrcode-generator.com/qrcodes?lng=en&amp;signup_source=try_for_free_qrcreation&amp;userLandingPage=https%3A%2F%2Flp.the-qrcode-generator.com%2F"
            className="inline-block"
          ></a>
        </div>
      </div>
    </section>
  );
}
