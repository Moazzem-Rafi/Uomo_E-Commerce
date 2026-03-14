import FaqList from "../component/faq/FaqList";
import faqData from "../component/faq/faqData";

// ✅ Dynamic heading — এখানে যা লিখবেন page এ তাই দেখাবে
const PAGE_HEADING = "FREQUENTLY ASKED QUESTIONS";

const Faq = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[930px] mx-auto px-6 py-14">
        {/* Dynamic Heading */}
        <h1 className="text-[28px] font-bold text-gray-900 border-b-2 border-blue-500 pb-6 mb-10 tracking-wide">
          {PAGE_HEADING}
        </h1>

        {/* FAQ Sections */}
        <FaqList faqs={faqData} />
      </div>
    </div>
  );
};

export default Faq;