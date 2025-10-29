'use client';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';

type QNAElementProps = {
  question: string;
  answer: string;
};

function QNAElement({ question, answer }: QNAElementProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full shadow-lg rounded-4xl bg-main-background px-8 py-4 mb-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-left cursor-pointer"
      >
        <span className="text-[16px] font-medium text-[#1a73e8]">Q: <span className="text-main-foreground font-bold ml-4">{question}</span></span>
        <KeyboardArrowDownIcon
          className={`transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {open && (
        <>
          <hr className="border-t border-main-light/20 mt-2" />
          <div className="py-4">
            <p className="text-[16px] font-medium text-green-600">A: <span className="text-[14px] font-normal text-main-light ml-4">{answer}</span></p>
          </div>
        </>
      )}
    </div>
  );
}

export default QNAElement;
