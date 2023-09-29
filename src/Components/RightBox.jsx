import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  return (
    <div className="right-box">
      {/* Add tip Amount and total here */}
      <div className="showContainer">
        <div className="content">
          <h3>Tip Amount</h3>
          <h6>/ person</h6>
        </div>
        <div className="outputBox">{`₹15.00`}</div>
      </div>
      <div className="showContainer">
        <div className="content">
          <h3>Total</h3>
          <h6>/ person</h6>
        </div>
        <div className="outputBox">{`₹115.00`}</div>
      </div>
      {/* Add button to RESET */}
      <div className="showContainer resetBtn">
        <button>RESET</button>
      </div>
    </div>
  );
};

export default RightBox;
