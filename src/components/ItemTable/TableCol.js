import React from 'react';
import { ResizableBox} from 'react-resizable';

class TableCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 260,
            items: this.props.items,
            value: ''
        }
    }

    render() {
        return (
            <ResizableBox className="box " width={this.state.width} axis="x">
                <div className="box">
                    <div className="table-row--cell table-row--cell-header">
                        <p>{this.props.title}</p>
                    </div>
                    <div className="no-drop table-col-wrap">
                        <div className="table-row--cell table-row--cell-search">
                            <input value={this.state.value} type="text" placeholder="Search..."/>
                        </div>
                        {
                            this.state.items.map((item, key) => (
                                <div key={key} className="table-row--cell table-row--cell-info">
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </ResizableBox>

        )
    }

};

export default TableCol;
