import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Classified.css';
import Highlighter from 'react-highlight-words';

export function Classified() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const clickHandler = () => {
    navigate('/');
  };
  return (
    <div className="classified">
      <button onClick={clickHandler} className="classified-btn">
        Back to Home
      </button>
      <h2 className="classified-title">{state.title}</h2>
      <Highlighter
        highlightClassName="classified-body-highlight"
        unhighlightClassName="classified-body"
        searchWords={['xxxx']}
        autoEscape={true}
        textToHighlight={state.classifiedData}
      />
    </div>
  );
}
