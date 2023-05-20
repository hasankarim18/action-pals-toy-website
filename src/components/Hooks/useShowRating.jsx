import { FaRegStar, FaStar } from "react-icons/fa";

const useShowRating = (rating, textSize, marginRight) => {
  const ratingInt = parseInt(rating, 10);
  let tx;
  let gap;

  if (textSize) {
    tx = textSize;
  } else {
    tx = "";
  }
  if (marginRight) {
    gap = marginRight;
  } else {
    gap = "2";
  }

  const stars = Array.from({ length: ratingInt }, (_, index) => (
    <span className={`mr-${gap} text-${tx}`} key={index}>
      <FaStar />
    </span>
  ));

  const emptyStart = Array.from({ length: 5 - ratingInt }, (_, index) => (
    <span className={`mr-${gap} text-${tx}`} key={index}>
      <FaRegStar />
    </span>
  ));

  return (
    <div className="my-2 flex gap-4 items-center">
      <span className={`text-${tx}`}>Rating:</span>
      <div className="p-2 flex text-sweetPink ">
        {stars} {emptyStart}
      </div>
    </div>
  );
};

export default useShowRating;
