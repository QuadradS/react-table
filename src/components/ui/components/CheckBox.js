import React from 'react';
import Check from '../icons/Check';

const switchOnCheckBox = {
    background:'#756dd4',
};
const switchOffCheckBox = {
    background:'#e7e4f5'
};
const switchOnSlider = {
    fill:'#fff',
};
const switchOffSlider = {
    display:'none'
};
const CheckBox =(props)=>{
    const styleCheckBox =  props.state ? switchOnCheckBox : switchOffCheckBox
    const styleCheckBoxSlider =  props.state ? switchOnSlider : switchOffSlider
    return(
        <div className="check-box" style={styleCheckBox}>
            <Check className="check-box--slider" style={styleCheckBoxSlider} />
        </div>
    )
};

export default CheckBox;