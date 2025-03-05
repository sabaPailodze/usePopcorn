import React, { useState } from "react";
import Star from "../Star/Star";

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  defaultRating = 0,
  setUserRating,
  userRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(selectedRating) {
    const newRating = rating === selectedRating ? 0 : selectedRating;
    setRating(newRating);
    setUserRating(newRating);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 justify-center">
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
      </div>
      {userRating > 0 && (
        <p className="text-[16px] xs:text-[21px] text-center">
          This movie was rated {rating} stars
        </p>
      )}
    </div>
  );
}

export default StarRating;
