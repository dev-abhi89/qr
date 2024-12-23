import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What does it mean by generator for QR codes?",
      answer:
        "Different uses of quick respond codes can be created on an online tool referred to as the QR Code generator. A QR Code generator makes it easy to offer a website address, show a PDF, offer WiFi access, and add multimedia like music or videos. This may include, but is not limited to, use as a personal, professional, and advertising tool.",
    },
    {
      question: "Is it free to use QR codes?",
      answer:
        "Indeed, it means that generating and utilizing static QR codes do not cost a lot. People send QR codes for URLs, vCards, emails, text messages, social connections, WiFi passwords, and Bitcoin addresses, to mention a few. Static QR Codes are always active when they are developed and there is no extra effort needed to get them going. But always input them through the printer instead of typing because they cannot be edited once created.",
    },
    {
      question: "Can QR Codes work for business?",
      answer:
        "Of course! Due to their huge flexibility QR codes are used frequently in many marketisation endeavours and promotional fliers.",
    },
    {
      question: "What information can be placed into a QR code?",
      answer:
        "Numerous types of data can be stored in QR codes, such as: Web links to specific landing pages, company’s social media pages, or its official website. Contact information includes name and address, phone number and email address. Handbooks, menus, and brochures in Portable Document Format or PDF for short. Any detail about the event, including; dates, venues, and links to the RSVP either on the website or social media accounts. Documents, text documents, multimedia files like; music files, picture files, and movie files. For example, payment instructions like UPI IDs or Bitcoin wallet addresses, and more in using business applications like customer interactions, product branding.",
    },
    {
      question: "Are QR Code scans traceable and analyzable?",
      answer:
        "Indeed, it is possible to publicize more dynamic features of the QR Codes; the number of scans the geographic location of the user, time of scan and the operating systems of the devices used in scanning. It is especially helpful to get these ideas when all you want is to tailor your next marketing campaign or observe the activity of your target audience.",
    },
    {
      question: "Can a QR Code ever go bad?",
      answer:
        "Static QR Codes do not fade from the scene and stay in function, functionlessly until their linked information becomes inaccessible. On the other hand, Dynamic QR Codes can be frequently changed or can also be put under control anytime that is why it is a better option for long-run use.",
    },
    {
      question:
        "It is important that I know the difference between a static and a dynamic QR Code.",
      answer:
        "Static QR Codes: Permanent and cannot be changed even with the help of the correct formatting tools, suitable for single purpose actions such as sharing a link. Dynamic QR Codes: It is possible to edit even after printing, comes with advance features like link updates, analytics and improved control.",
    },
    {
      question: "What is the optimum way of handling QR Codes?",
      answer:
        "If you have a PRO account, then you can easily deal with the QR Codes. Those are the provided elements: content editing, creating multiple pages at once, pre-designed templates, short link looks, and the ability to share the account with the team.",
    },
    {
      question:
        "Are it possible to create many times the same QR Code with the same content as the other?",
      answer:
        "Yes, QR Code standards permit different versions and a number of levels of error correction. This also helps in flexibility of developing qr codes for that same content but with different design or sizes while still being easily read.",
    },
    {
      question: "Can logo and branding be applied on QR Code?",
      answer:
        "Yes you can add logos, icons or your brand color to the standard codes to make them unique. This increases the chance of the brand to be seen by the users and increases the interaction between users and the site. However, they are many more options and advanced choices possible thanks to the PRO version.",
    },
    {
      question: "Is the use of black and white colours required for QR Codes?",
      answer:
        "Not at all! Significantly, QR Codes can be developed using any number of color interpositions, contingent on the fact that the resultant interpositions should be scannable. Ensure the functionality of QR codes when designing them to incorporate your brand colors to generate appealing designs.",
    },
    {
      question:
        "Is it possible to modify a QR Code after the latter has been printed?",
      answer:
        "This kind of QR codes can be easily modified, for instance, to change the link, correct a typo or modify the content once the Dynamic QR Codes have been printed. This helps avoid instance of having to reprint and in the process, save money.",
    },
    {
      question: "Where are large amounts of QR Codes produced?",
      answer:
        "There are also many APIs on the web for those who want to generate many codes at once for a single QR Code. This feature enables companies to generate several QR Codes at the same time, all of which share the same style as well as brand colors and graphics.",
    },
    {
      question: "In what graphic formats are the QR Codes downloadable?",
      answer:
        "However, to use QR codes, it can be downloaded in different format such as JPG, PNG, SVG and EPS. EPS files are usually printable in black and white if you wish to take professional print outs.",
    },
    {
      question: "What should I know before printing QR Codes?",
      answer:
        "Make sure that the QR Code’s dimension is accurate to its purpose, for smaller material, make it at least 2 x 2 cm in size. This makes it easier to read particularly if you are using neighboring colors This should however, always be checked before being printed.",
    },
    {
      question: "How can I work my smartphone in order to scan a QR Code?",
      answer:
        "All you need to do is launch the camera on your smartphone and point it over the QR Code. There will be a notification with the content or action or in other practical uses. If you cannot see this feature, you can download a free app of QR Code Scanner from your mobile application store.",
    },
    {
      question:
        "Is there another way to point a QR code and scan, without having an app?",
      answer:
        "Yes, new generation Android or IOS smartphones are basically equipped with the ability to scan a QR Code in their application settings – camera. There is no other app needed to be installed.",
    },
    {
      question:
        "Can a QR Code be scanned, numerous times, is there a limit of how many times it can be scanned?",
      answer:
        "Fortunately, QR Codes could be scanned any number of times, it could be barcodes static or dynamic.",
    },
    {
      question: "What could be a reason for a QR Code not to scan?",
      answer:
        "Some of the problems that clients face from specified printers may include low contrast, blurred print or even wrong size. For functionality; make sure the color found on the foreground is darker than the color on the background and always preview before use.",
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
