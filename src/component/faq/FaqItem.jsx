import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-base font-medium text-gray-800">
          {question}
        </span>
        <span className="text-xl text-gray-500">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <p className="pb-5 text-sm text-gray-500 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;