export default function Card({
  title = "Hello",
  content = "Hello",
  imgPath = "/images/img.jpg",
}) {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
    {/* // className="bg-white shadow-md p-6 rounded-lg text-centent hover:shadow-lg hover:scale-105 transison-transform duration-300"> */}
      <img src={imgPath} alt="Mobile Friendly" className="w-16 mx-auto mb-4" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}
