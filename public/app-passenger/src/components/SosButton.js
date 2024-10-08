// /app-passenger/src/components/SosButton.js

import React from 'react';

function SosButton() {
    const sendSosAlert = () => {
        // Lógica para enviar um alerta SOS
        console.log('Alerta SOS enviado!');
    };

    return (
        <div className="sos-button">
            <button onClick={sendSosAlert} style={{ backgroundColor: 'red', color: 'white' }}>
                SOS
            </button>
        </div>
    );
}

export default SosButton;
