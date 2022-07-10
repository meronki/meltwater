import React, { useState, useRef, useEffect } from 'react';
import './CensorForm.css';
import { useNavigate } from 'react-router-dom';
import { cleaner, replacer } from '../../Helpers/textProcessor';

export function CensorForm({ data }) {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState('');
  const [classified, setClassified] = useState();
  const [displayClassified, setDisplayClassified] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();

    const inputText = e.target.value;

    if (inputText) {
      const wordArray = cleaner(inputText);
      setInputData(wordArray);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (inputData) {
      const newData = replacer(data.description, inputData);
      setClassified(newData);
      setDisplayClassified(true);
    }
  };

  const displayClassifiedDocument = () => {
    setTimeout(() => {
      navigate('/classified', {
        state: { classifiedData: classified, title: data.title },
      });
      console.log('problem');
    }, 0);
  };

  return (
    <div>
      <h1 className="title">Title: {data.title}</h1>
      <form className="form">
        <div className="form-input">
          <input
            type="text"
            name="keyword"
            onChange={changeHandler}
            ref={inputRef}
            placeholder="Enter Keyword(s) or phrase(s) to censor"
          />
        </div>
        <div className="form-btn">
          <button onClick={clickHandler}>Censor Text</button>
        </div>
      </form>
      {displayClassified ? displayClassifiedDocument() : null}
    </div>
  );
}
