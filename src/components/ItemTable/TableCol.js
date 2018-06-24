import React from 'react';
import Check from './../ui/icons/Check';

const TableCol = (props) => {

    return(
            <div className="table-col">
                <div className="table-row--cell table-row--cell-header">
                    <p>{props.title}</p>
                </div>
                <div className="table-row--cell table-row--cell-search">
                    <input type="text" placeholder="Search..."/>
                </div>
                {
                    props.items.map((item)=>(
                        <div className="table-row--cell table-row--cell-info">
                            {item}
                        </div>
                    ))
                }

            </div>

    )
};

export default TableCol;

{/*<div className="table-col">*/}
    {/*<div className="table-row--cell table-row--cell-header">*/}
        {/*<div className="check-box check-box-on">*/}
            {/*<Check className="check-box--check check-box--check-on"/>*/}
        {/*</div>*/}
        {/*<p>{item}</p>*/}
    {/*</div>*/}
    {/*<div className="table-row--cell table-row--cell-search">*/}
        {/*<input type="text" placeholder="Search..."/>*/}
    {/*</div>*/}
    {/*<div className="table-row--cell table-row--cell-info">*/}
        {/*USA*/}
    {/*</div>*/}
{/*</div>*/}