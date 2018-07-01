import React from 'react';
import Check from './../ui/icons/Check';
import {Resizable, ResizableBox} from 'react-resizable';

class TableCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 260,
            drag: false
        }
    }

    onResize = (event, {element, size}) => {
        this.setState({width: size.width, height: size.height});
    };

    render() {
        return (
            <div className="box">
                <div className="table-row--cell table-row--cell-header">
                    <p>{this.props.title}</p>
                </div>
                <div className="no-drop">
                    <div className="table-row--cell table-row--cell-search">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <ResizableBox className="box " width={this.state.width} axis="x" contenteditable="true">
                        {
                            this.props.items.map((item, key) => (
                                <div key={key} className="table-row--cell table-row--cell-info" contenteditable="false">
                                    {item}
                                </div>
                            ))
                        }
                    </ResizableBox>
                </div>
            </div>
        )
    }

};

export default TableCol;

{/*<div className="table-col">*/
}
{/*<div className="table-row--cell table-row--cell-header">*/
}
{/*<div className="check-box check-box-on">*/
}
{/*<Check className="check-box--check check-box--check-on"/>*/
}
{/*</div>*/
}
{/*<p>{item}</p>*/
}
{/*</div>*/
}
{/*<div className="table-row--cell table-row--cell-search">*/
}
{/*<input type="text" placeholder="Search..."/>*/
}
{/*</div>*/
}
{/*<div className="table-row--cell table-row--cell-info">*/
}
{/*USA*/
}
{/*</div>*/
}
{/*</div>*/
}