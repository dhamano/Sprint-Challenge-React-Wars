import React from 'react';

import './pagination.scss';

const Pagination = props => {

  function getNextPage(event, url) {
    event.preventDefault();
    props.pageVars.fetchData(props.pageVars.next);
  }

  function getPrevPage(event, url) {
    event.preventDefault();
    props.pageVars.fetchData(props.pageVars.previous);
  }
  return (
    <ul className="pagination">
      <li className={props.pageVars.previous === null ? 'disabled' : 'previous'}><span href="#" onClick={getPrevPage}>&lt; previous</span></li>
      <li className={props.pageVars.next === null ? 'disabled' : 'next'}><span href="#" onClick={getNextPage}>next &gt;</span></li>
    </ul>
  )
}

export default Pagination;