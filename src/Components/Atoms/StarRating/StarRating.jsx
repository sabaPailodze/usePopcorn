import React, { useState } from "react";
import Star from "../Star/Star";

function StarRating({ maxRating = 5, color = "#fcc419", messages = [] }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="flex gap-1">
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              onClick={() => setRating(i + 1)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onMouseIn={() => setTempRating(i + 1)}
              onMouseOut={() => setTempRating(0)}
              color={color}
            />
          ))}
        </div>
        <p className={`text-[18px] text-center text-${color}`}>
          {messages.length === maxRating
            ? messages[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      </div>
      <p className="text-[22px]">This movie was rated {rating} stars</p>
    </div>
  );
}

export default StarRating;
