import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: isOpen ? "#111111" : "#E4E4E4", borderBottomWidth: isOpen ? "3px" : "1px" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span
          className="text-[13px] leading-snug text-gray-800"
          style={{ fontWeight: isOpen ? "500" : "400" }}
        >
          {question}
        </span>

        {/* Icon: + or − with rotate animation */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 flex-shrink-0 text-gray-700 text-[18px] leading-none select-none"
          style={{ display: "inline-block" }}
        >
          +
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