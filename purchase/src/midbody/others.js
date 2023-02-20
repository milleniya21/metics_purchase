import React from 'react';
import './others.css';

function Mid ()
{
  return (
    <div className='other'>
        <div className='left_aligned'>
           <button > Export CSV</button>
        </div>
        <div className='right_aligned'>
            <input type="text" placeholder='Search'/>
            <input type="submit" placeholder='Search' id ='btn_search'/>
            
        </div>
       
    </div>

  );
}
export default Mid;
