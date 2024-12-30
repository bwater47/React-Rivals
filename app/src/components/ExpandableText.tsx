import { useState } from "react";

// Interface for type safety, and to be able to pass props.
interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  // The only state were changing is the state of how much text is shown.
  const [isExpanded, setExpanded] = useState(false);
  // If the children length is less than the maxChars return the text.
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
