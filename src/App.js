import React, { useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import Swatch from './swatch';

const App = () => {
    const [saturation, setSaturation] = useState();
    const [luminosity, setLuminosity] = useState();
    const [colors, setColors] = useState();
    const [awaitingResponse, setAwaitingResponse] = useState(false);

    async function getColorArray() {
        if (saturation < 0 || saturation > 100 || luminosity < 0 || luminosity > 100 || isNaN(saturation) || isNaN(luminosity)){
            alert("Please enter a valid saturation and luminosity value (0-100)");
            return;
        }

        setColors([]);
        const colors_list = [];
        setAwaitingResponse(true);
        for (let hue = 0; hue < 360; hue += 1) {
            let response = await fetch(`https://www.thecolorapi.com/id?hsl=${hue},${saturation}%,${luminosity}%`);
    
            let json = await response.json();

            let name = json.name;
            let rgb = json.rgb;
            let hex = json.hex;
    
            let temp_obj = {name: name.value, r: rgb.r, g: rgb.g, b: rgb.b, hex: hex.value};

            if (!colors_list.some(color => color.name === temp_obj.name)) {
                colors_list.push(temp_obj);
                setColors(prevColors => [...prevColors, temp_obj]);
            }
        }
        setAwaitingResponse(false);
    }

    return (
        <div>
            <h1>Color Swatches Generator</h1>
            <p>Enter Saturation and Luminosity values below and press "Generate Swatches" to get a pallette of color swatches with corresponding S and L values.</p>
            <input id="saturationInput" placeholder={"Saturation (0-100)"} onChange={e => setSaturation(e.target.value)}/>
            <input id="luminosityInput" placeholder={"Luminosity (0-100)"} onChange={e => setLuminosity(e.target.value)}/>
            <button onClick={() => getColorArray()}>Generate Swatches</button>
            {awaitingResponse &&
                <div className='overlay'>
                    <Vortex
                        visible={true}
                        wrapperClass='loading_spinner'
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />
                </div>
            } 
            {colors &&
                <div className='grid'>
                    {colors.map((color, index) => (
                        <div key={index}>
                            <Swatch name={color.name} r={color.r} g={color.g} b={color.b} hex={color.hex}/>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};



export default App;