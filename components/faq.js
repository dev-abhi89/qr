import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a generator for QR codes?",
      answer:
        "An online tool for creating customisable QR Codes for a variety of uses is called a QR Code generator. A QR Code generator provides a straightforward method for sharing a website link, displaying a PDF, connecting people to WiFi, and storing multimedia content like music or videos. It is frequently utilised for personal, professional, and marketing purposes.",
    },
    {
      question: "Is it free to use QR codes?",
      answer:
        "Yes, creating and using static QR codes is totally free. QR codes for URLs, vCards, emails, SMS, social media connections, WiFi passwords, and Bitcoin addresses are a few examples. Static QR Codes are always working once they are created. Always test them before printing, though, as they cannot be changed or amended.",
    },
    {
      question: "Is it possible to use QR Codes for business?",
      answer:
        "Of course! Because of their great versatility, QR codes are widely utilised in arketing campaigns, and promotional flyers.",
    },
    {
      question: "What kinds of datacan be stored in a QR code?",
      answer:
        "Numerous types of data can be stored in QR codes, such as:URLs to landing pages, social media accounts, or websites.\nNames, phone numbers, and email addresses are examples of contact details.\nPDF documents, including user manuals, menus, and brochures.\nInformation on the event, including dates, venues, and RSVP links.\nmultimedia files, such as music, images, and movies.\nPayment details, such as UPI IDs or Bitcoin wallet addresses.business applications like customer engagement, product packaging,",
    },
    {
      question: "Can I track and analyze QR Code scans?",
      answer:
        "Yes, dynamic QR Codes allow you to track the number of scans, the geographic location of users, time of scans, and even the device operating systems. These insights are invaluable for optimizing marketing campaigns and understanding audience behavior.",
    },
    {
      question: "Do QR Codes have an expiration date?",
      answer:
        "Static QR Codes do not expire and remain functional indefinitely unless the linked content becomes invalid. Dynamic QR Codes, on the other hand, can be updated and controlled at any time, making them more reliable for long-term use.",
    },
    {
      question: "What is the difference between static and dynamic QR Codes?",
      answer:
        "Static QR Codes: Fixed and uneditable after creation, suitable for simple tasks like sharing a URL.\nDynamic QR Codes: Editable even after printing, offering features like link updates, analytics, and better control.",
    },
    {
      question: "How can I manage QR Codes efficiently?",
      answer:
        "With a PRO account, you can manage QR Codes seamlessly. Features include content editing, batch creation, template designs, custom short URLs, and access for multiple team members.",
    },
    {
      question: "Can I create multiple QR Codes for the same content?",
      answer:
        "Yes, QR Code standards allow for various versions and error correction levels. This ensures flexibility in creating QR Codes for the same content with different designs or sizes while maintaining readability.",
    },
    {
      question: "Is it possible to customize QR Codes with logos and branding?",
      answer:
        "Yes, you can personalize your QR Codes by adding logos, icons, or brand colors. This enhances brand visibility and improves user engagement. However, advanced customization features are available in the PRO version.",
    },
    {
      question: "Do QR Codes need to follow the black-and-white color scheme?",
      answer:
        "Not at all! QR Codes can be designed with any color combination, provided there’s enough contrast for scanning. Use your brand colors to create visually appealing QR Codes while ensuring functionality.",
    },
    {
      question: "Can I edit a QR Code after it’s printed?",
      answer:
        "Dynamic QR Codes can be edited to update links, fix typos, or change the content even after printing. This eliminates the need to reprint and saves costs.",
    },
    {
      question: "How do I generate large quantities of QR Codes?",
      answer:
        "For bulk QR Code generation, use a QR Code API. This feature allows businesses to automate the creation of multiple QR Codes with consistent branding, color, and design elements.",
    },
    {
      question: "What graphic formats are supported for QR Code downloads?",
      answer:
        "QR Codes can be downloaded in various formats, including high-resolution JPG, PNG, SVG, and EPS. EPS files are available in black and white for professional printing needs.",
    },
    {
      question: "What should I know before printing QR Codes?",
      answer:
        "Ensure that the QR Code size is appropriate for its intended use, with a minimum size of 2 x 2 cm for smaller materials. Use contrasting colors for better readability, and always test the QR Code before printing.",
    },
    {
      question: "How can I scan a QR Code using my smartphone?",
      answer:
        "Simply open your smartphone’s camera app and hover it over the QR Code. A notification will appear with the content or action. If this feature is not enabled, you can download a free QR Code scanner app from your app store.",
    },
    {
      question: "Can QR Codes be scanned without an app?",
      answer:
        "Yes, modern smartphones come with built-in QR Code scanning capabilities in their camera apps. No additional app is required.",
    },
    {
      question: "Is there a limit to how many times a QR Code can be scanned?",
      answer:
        "No, QR Codes can be scanned an unlimited number of times, whether static or dynamic.",
    },
    {
      question: "Why might a QR Code fail to scan?",
      answer:
        "Common issues include poor contrast, blurry printing, or incorrect size. To ensure functionality, keep the foreground darker than the background and test thoroughly before use.",
    },
    {
      question:
        "What is the recommended size for QR Codes on different materials?",
      answer:
        "For business cards or flyers, the minimum size is 2 x 2 cm (0.8 x 0.8 in). For larger formats like posters or billboards, increase the size proportionally to maintain readability.",
    },
    {
      question: "How can businesses maximize the effectiveness of QR Codes?",
      answer:
        "To enhance user engagement, use dynamic QR Codes for analytics, customize them with brand elements, and place them strategically on marketing materials. Always provide clear instructions on how to scan the QR Code.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-blue-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-blue-50 ${
                openIndex === index ? "bg-blue-50" : ""
              }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-blue-600"
                onClick={() => toggleAccordion(index)}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-blue-600 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
                aria-labelledby={`basic-heading-${index}`}
              >
                <p className="text-base text-gray-900 leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
