import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (status)
    return (
      <FaHeart color="#ff6b81" size="50" onClick={() => setStatus(false)} />
    );
  return <FaRegHeart size="50" onClick={() => setStatus(true)} />;
};

export default Like;
