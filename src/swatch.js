import React, { Component } from 'react';

class Swatch extends Component {
    getTextColor(r, g, b) { // so text is always visible
        let brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 125 ? 'black' : 'white';
    }

    render() {
        const { name, r, g, b, hex } = this.props;
        const textColor = this.getTextColor(r, g, b);
        return (
            <div 
            className="swatch" 
            style={{backgroundColor: hex, color: textColor}} 
            >
                <div>
                    <div>{name}</div>
                    <div>{`R: ${r}`}</div>
                    <div>{`G: ${g}`}</div>
                    <div>{`B: ${b}`}</div>
                </div>
            </div>
        );
    }
}

export default Swatch;