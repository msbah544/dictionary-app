const Definition = ({ data }) => {
  return (
    <div className="info">
      <h1 className="word">{data.word}</h1>
      <p className="pos">
        {data.meanings && data.meanings[0].partOfSpeech} {data.phonetic}
      </p>
      <p className="definition">
        <span>Definition(s):</span>
        <br />
        {data.meanings && "1. " + data.meanings[0].definitions[0].definition}
        <br />
        {data.meanings && "2. " + data.meanings[0].definitions[1].definition}
        <br />
        {data.meanings && "3. " + data.meanings[0].definitions[2].definition}
        <br />
      </p>
      <span>Synonym(s):</span>
      <br />
      <p className="synonyms">
        {data.meanings && data.meanings[0].synonyms[0]}
        {/*{"," + data.meanings && data.meanings[0].synonyms[1]},
        {"," + data.meanings && data.meanings[0].synonyms[2]}*/}
      </p>
      <p className="example">
        <span>Example(s):</span>
        <br />
        {/*{data.meanings && "1. " + data.meanings[0].definitions[0].example}*/}
        <br />
        {/* {data.meanings && "2. " + data.meanings[0].definitions[1].example} */}
        <br />
        {/*{data.meanings && "3. " + data.meanings[0].definitions[2].example}*/}
        <br />
      </p>
    </div>
  );
};

export default Definition;
