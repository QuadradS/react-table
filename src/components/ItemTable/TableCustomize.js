import React from 'react';
import CheckBox from '../ui/components/CheckBox'
import Settings from './../ui/icons/Settings';
import Modal from '../ui/components/Modal';
import Pin from './../ui/icons/Pin';
import Close from './../ui/icons/Close'

const TableCustomizeBody = (props) => (
    <div className="table-modal">
        <div className="table-modal--bg-layer" onClick={props.onClose}/>
        <div className="table-modal--body">
            <div className="table-modal--title">
                Table Customise
                <div className="table-customise--close" onClick={props.onClose}>
                    <Close/>
                </div>
            </div>
            <div className="table-modal--items">
                <div className="table-modal--item">
                    <div className="table-check-box">
                        <CheckBox state={true}/>
                    </div>
                    <div className="table-check-box--pin">
                        <Pin/>
                    </div>
                    <span>Customise table item</span>
                </div>
                <div className="table-modal--item">
                    <div className="table-check-box">
                        <CheckBox state={true}/>
                    </div>
                    <div className="table-check-box--pin">
                        <Pin/>
                    </div>
                    <span>Customise table item</span>
                </div>
                <div className="table-modal--item">
                    <div className="table-check-box">
                        <CheckBox state={true}/>
                    </div>
                    <div className="table-check-box--pin">
                        <Pin/>
                    </div>
                    <span>Customise table item</span>
                </div>
                <div className="table-modal--item">
                    <div className="table-check-box">
                        <CheckBox state={true}/>
                    </div>
                    <div className="table-check-box--pin">
                        <Pin/>
                    </div>
                    <span>Customise table item</span>
                </div>
            </div>
        </div>
    </div>
)

class TableCustomize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    handleClose = () => (
        this.setState({isModalOpen: false})
    );
    handleOpen = () => (
        this.setState({isModalOpen: true})
    );

    render() {
        return (
            <div className="table-customise" >
                <div onClick={this.handleOpen}>
                    <Settings/>
                    <span>
                        Table customise
                    </span>
                </div>
                {
                    this.state.isModalOpen &&
                    <Modal>
                        <TableCustomizeBody onClose={this.handleClose}/>
                    </Modal>
                }

            </div>
        )
    }
};

export default TableCustomize;