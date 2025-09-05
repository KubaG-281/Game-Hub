import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <div>{children}</div>;

  const summary = isExpanded ? children : children.slice(0, limit) + " ...";

  return (
    <div>
      {summary}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn btn-warning btn-sm fw-bold ms-1"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ExpandableText;
