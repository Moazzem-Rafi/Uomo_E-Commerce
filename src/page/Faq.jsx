import FaqList from "../component/faq/FaqList";
import faqData from "../component/faq/faqData";

const Faq = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="bg-cyan-500 flex items-center justify-center py-16">
        <h1 className="text-[72px] text-white font-bold">FAQ</h1>
      </div>

      {/* FAQ content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          সচরাচর জিজ্ঞাসা
        </h2>
        <FaqList faqs={faqData} />
      </div>
    </div>
  );
};

export default Faq;
