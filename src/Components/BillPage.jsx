import { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [state, setState] = useState({
    bill: 0,
    people: 1,
    tip: null,
  });

  return (
    <div className="billbox">
      {/* Add LeftBox and RightBox component here */}
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default BillPage;
