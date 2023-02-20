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
            <input type="text" placeholder='Search'id ="search_bar"/>
            <div className='dropdown'>
                <form action="/action_page.php">
                            
                                    <select name="options" id="sort">
                                        <option value="by type">By type </option>
                                        <option value="by status">By Status</option>
                                    </select>
                                    <input type="submit" value="Search" id ="btn-search"/>
                </form>
            </div>    
        </div>
       
    </div>

  );
}
export default Mid;
