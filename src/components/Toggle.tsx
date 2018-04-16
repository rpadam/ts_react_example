import * as React from 'react';
import './Toggle.css';

interface Props {
    on: boolean;
    toggle: () => void;
}

function Toggle ({ on, toggle }: Props) {
    return (
        <div className="toggle">
            <button onClick={toggle}>{getButtonText(on)}</button>
        </div>
    );
}

export default Toggle;

function getButtonText( isOn: boolean ) {
    if ( isOn ) {
        return 'on';
    } else {
        return 'off';
    }
}