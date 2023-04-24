import { useState } from "react";

function CollapseExpand({ item, searchTerm }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-10">
      <a
        href="#"
        className="flex items-center justify-between"
        onClick={handleToggle}
      >
        <h4 className="font-semibold">{item.title}</h4>
        <svg
          className={`w-5 h-5 text-gray-500 transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
      {isExpanded && (
        <div className="mt-5">
          {item.questions.map(
            (q, i) =>
              q.question.toLowerCase().includes(searchTerm.toLowerCase()) && (
                <div key={i}>
                  <p className="underline  my-2">{q.question}</p>
                  <div>{q.answer}</div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default CollapseExpand;
