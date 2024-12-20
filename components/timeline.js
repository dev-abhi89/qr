export default function Timeline() {
  return (
    <section className="bg-gray-100 mt-11 mb-0">
      <div className="container pt-11 pb-10 lg:pb-9 lg:pb-0 relative mx-auto z-[1]">
        <h2 className="text-center pt-0 mb-3 font-medium text-xl lg:text-2xl">
          How to make a free QR Code?
        </h2>
        <p className="text-center text-gray-500 mb-5 lg:pb-5">
          Create a free QR Code in three simple steps.
        </p>

        {/* Stepper Rows */}
        <div className="stepper-row flex flex-col lg:flex-row  mx-auto max-w-fit">
          {/* Step 1 */}
          <div className="lg:w-1/3 flex flex-col justify-start mb-5">
            <img
              className="w-full h-auto object-cover"
              src="https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/img/homepage/homepage-step-1.webp"
              alt="Choose the QR Code type"
            />
          </div>
          <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          <div className="lg:w-1/2 flex flex-col justify-start">
            <h3 className="text-lg font-medium mb-2">
              Choose the QR Code type
            </h3>
            <p className="text-gray-500">
              Select the type of QR Code that best fits your needs. Choose from
              multiple options, including a link (URL), PDF, or Multi-URL. While
              static QR Codes cannot be edited after creation, dynamic QR Codes
              can be edited anytime.
            </p>
          </div>
        </div>
        <div className="stepper-row flex flex-col lg:flex-row px-12 pt-12  mx-auto max-w-fit">
          {/* Step 1 */}
          <div className="lg:w-1/2 flex flex-col justify-start">
            <h3 className="text-lg font-medium mb-2">
              Choose the QR Code type
            </h3>
            <p className="text-gray-500">
              Select the type of QR Code that best fits your needs. Choose from
              multiple options, including a link (URL), PDF, or Multi-URL. While
              static QR Codes cannot be edited after creation, dynamic QR Codes
              can be edited anytime.
            </p>
          </div>

          <div className="hidden lg:flex w-1/12 items-center justify-center text-xl">
            1
          </div>
          <div className="lg:w-1/3 flex flex-col justify-start mb-5">
            <img
              className="w-full h-auto object-cover"
              src="https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/img/homepage/homepage-step-1.webp"
              alt="Choose the QR Code type"
            />
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
