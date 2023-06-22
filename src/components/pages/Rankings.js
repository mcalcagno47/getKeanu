import React from 'react';

export default function Rankings() {
  return (
      <div className='rankListContainer'>
        <div id='Amandas-rank' className='rankList'>
            <h3>Amanda's List</h3>
            <ol>
                <li>John Wick</li>
                <li>Bill and Ted's Excellent Adventure</li>
            </ol>
        </div>
        <div id='Sarahs-rank' className='rankList'>
        <h3>Sarah's List</h3>
            <ol>
                <li>John Wick</li>
                <li>Bill and Ted's Excellent Adventure</li>
            </ol>
        </div>
        <div id='Marks-rank' className='rankList'>
        <h3>Mark's List</h3>
            <ol>
                <li>John Wick</li>
                <li>Bill and Ted's Excellent Adventure</li>            
            </ol>
        </div>
      </div>
  );
}