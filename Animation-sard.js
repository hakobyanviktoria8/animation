import React from "react";
import Particles from 'react-particles-js';

function Animation(props) {
    return (
        <div style={{backgroundColor: "black"}}>
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 150
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
        </div>
    );
}
export  default Animation