import "./App.css";
import Form from "./Form";
import Definition from "./Definition";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(
    /*[
    { word: "help" },
    { meanings: "hhhhhhhhhhhhddddddd" },
  ]*/ [""]
  );
  const [searchText, setSearchText] = useState("");

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const fetchData = async () => {
    let response = await fetch(URL + searchText);
    let results = await response.json();
    //console.log(response);
    console.log(results);
    setData(results);
    //console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  return (
    <div className="container">
      <Form searchText={searchText} setSearchText={setSearchText} />
      <Definition data={data[0]} searchText={searchText} />
    </div>
  );
};

export default App;
