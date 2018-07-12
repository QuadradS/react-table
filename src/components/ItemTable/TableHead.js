import React from 'react';
import More from './../ui/icons/More';
import Pin from './../ui/icons/Pin';
import Monitor from './../ui/icons/Monitor';
import CheckBox from '../ui/components/CheckBox'

const TableHead = (props) => (
        props.items.map((item, key) => (
            <div className="table-row--cell table-row--cell-search" key={key}>
                <div className="flex actions-btns">
                    <div className="wh20" onClick={() => props.onSelect(item.id)}>
                        <CheckBox state={item.selected}/>
                    </div>
                    <div className="actions-wrap-btn" onClick={() => this.onFix(item)}>
                        <More className="actions-btn"/>
                    </div>
                    <div className="actions-wrap-btn">
                        <Pin className="actions-btn"/>
                    </div>
                    <div className="actions-wrap-btn">
                        <Monitor className="actions-btn"/>
                    </div>
                </div>
            </div>
        ))
);

export default TableHead;