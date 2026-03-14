import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <span
          className={`text-[13px] leading-snug transition-colors duration-200 ${
            isOpen ? "text-gray-900 font-medium" : "text-gray-700"
          }`}
        >
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 flex-shrink-0 text-gray-500 group-hover:text-gray-900 transition-colors duration-200"
        >
          {isOpen ? (
            <AiOutlineMinus size={16} />
          ) : (
            <GoPlus size={16} />
          )}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-[13px] text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;