export default function BtnGenerate({ text = "Generate QR Code" }) {
  return (
    <button
      type="submit"
      className="px-6 py-3 mt-2 text-white bg-blue-600 rounded-xl hover:shadow-lg hover:scale-115 hover:bg-blue-700"
    >
      {text}
    </button>
  );
}
