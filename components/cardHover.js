import IconEmail from "./icons/email";

export default function CardHover({
  Icon = () => <IconEmail />,
  title = "Hello",
  content = "hello",
}) {
  return (
    <div className="relative flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 hover:bg-blue-500">
        {/* Background Circle */}
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>

        {/* Card Content */}
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400">
            <Icon />
          </span>

          {/* Text Content */}
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
                href="#"
                className="text-blue-500 transition-all duration-300 group-hover:text-white"
              >
                {title}
              </a>
            </p>
          </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white">
            <p>{content}</p>
          </div>

          {/* Link */}
        </div>
      </div>
    </div>
  );
}
