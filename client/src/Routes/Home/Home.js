import React, {useState } from 'react';
import { DocumentTitle } from '../../components/documentTitle/DocumentTitle';
import { FetchData } from '../../Hooks/FetchData';
import './Home.css';

export function Home() {
  const [search, setSearch] = useState();
  const { doc } = FetchData();

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="main-title">Classifying CIA Documents</h1>
      <div>
        <input
          onChange={searchHandler}
          type="search"
          className="search"
          placeholder="Search Documents Using Keywords"
          autoFocus
        />
      </div>

      {doc.length &&
        doc.map((data) => {
          return !search ? (
            <DocumentTitle data={data} key={data.id} />
          ) : search &&
            data.title.toLowerCase().includes(search.toLowerCase()) ? (
            <DocumentTitle data={data} key={data.id} />
          ) : null;
        })}
    </div>
  );
}
