import React, { useState } from "react";
// const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {

const LeftBox = () => {
  const [bill, setBill] = useState(0); // State for bill amount
  const [numPeople, setNumPeople] = useState(1); // State for number of people
  const [selectedTip, setSelectedTip] = useState(null);

  // Function to handle changes in the bill input field
  const handleBillChange = (e) => {
    e.preventDefault();
    setBill(e.target.value);
  };

  // Function to handle changes in the number of people input field
  const handleNumPeopleChange = (e) => {
    e.preventDefault();
    setNumPeople(e.target.value);
  };

  // Function to handle changes in the selected tip
  const handleTipButtonClick = (e) => {
    setSelectedTip(e.target.value);
  };

  return (
    <div className="left-box">
      {/* Add input for bill */}
      <h3 className="titleHead">Bill</h3>
      <input
        type="Number"
        name=""
        id=""
        placeholder="0"
        className="inputContainer"
        onChange={handleBillChange}
      />

      {/* Add buttons for % of tip */}
      <h3 className="titleHead">Select tip %</h3>
      <div className="tipArea">
        <input
          type="button"
          value="5"
          className={selectedTip === "5" ? "selected" : ""}
          onClick={(e) => handleTipButtonClick(e)}
        />
        <input
          type="button"
          value="10"
          className={selectedTip === "10" ? "selected" : ""}
          onClick={(e) => handleTipButtonClick(e)}
        />
        <input
          type="button"
          value="15"
          className={selectedTip === "15" ? "selected" : ""}
          onClick={(e) => handleTipButtonClick(e)}
        />
        <input
          type="button"
          value="25"
          className={selectedTip === "25" ? "selected" : ""}
          onClick={(e) => handleTipButtonClick(e)}
        />
        <input
          type="button"
          value="50"
          className={selectedTip === "50" ? "selected" : ""}
          onClick={(e) => handleTipButtonClick(e)}
        />
      </div>

      {/* Add input for no.of peoples */}
      <h3 className="titleHead">Number of People</h3>
      <input
        type="number"
        id="numPeopleInput"
        placeholder="1"
        className="inputContainer"
        onChange={handleNumPeopleChange}
      />
    </div>
  );
};

export default LeftBox;
