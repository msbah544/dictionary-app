import { useState } from "react";
const Form = ({ setSearchText }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
    //console.log(inputText);
  };
  const handleClick = (e) => {
    e.preventDefault();
    //console.log("hello");
    setSearchText(inputText);
  };
  return (
    <form /*onSubmit={handleSubmit}*/>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleClick}>search</button>
    </form>
  );
};

export default Form;
