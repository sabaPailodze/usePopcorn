import React, { useState } from "react";
import Star from "../Star/Star";

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  messages = [],
  defaultRating = 0,
  setUserRating,
  userRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    setUserRating(rating);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="flex gap-1">
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              onRate={() => handleRating(i + 1)}
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
      {userRating > 0 && (
        <p className="text-[22px]">This movie was rated {rating} stars</p>
      )}
    </div>
  );
}

export default StarRating;
