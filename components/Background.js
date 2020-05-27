import React, { useState } from 'react';
import Particles from 'react-particles-js';

export default function Background(props) {
    const bgStyle = {
        position: "absolute",
        width: "100%",
        zIndex: -1,
        top: 0,
        left: 0,
        backgroundColor: "#fff"
    }

    return(
        <Particles 
        params={{
            particles: {
                number: {
                    value: 100,
                },
                shape: {
                    type: "circle",
                },
                color: {
                    value: ["#1479d9"]
                },
                line_linked: {
                    color: "#FFF",
                    width: 1,
                    shadow: {
                        enable: true,
                        color: "#333333",
                        blur: 5
                    }
                },
                size: {
                    value: 15,
                    random: true
                }
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    },
                },
                modes: {
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    bubble: {
                        distance: 200,
                        size: 20,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    }
                }
            },
            retina_detect: true
        }}
        style={bgStyle}

    />
    )
}