// /admin-client/src/components/Personalization.js
import React, { useState } from 'react';

function Personalization() {
    const [settings, setSettings] = useState({
        logo: '/path/to/logo.png',
        primaryColor: '#00796b',
        secondaryColor: '#004d40',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSettings({ ...settings, [name]: value });
    };

    return (
        <div className="personalization-settings">
            <h1>Personalização do Aplicativo</h1>
            <form>
                <label>Logotipo</label>
                <input
                    type="text"
                    name="logo"
                    value={settings.logo}
                    onChange={handleInputChange}
                />

                <label>Cor Primária</label>
                <input
                    type="color"
                    name="primaryColor"
                    value={settings.primaryColor}
                    onChange={handleInputChange}
                />

                <label>Cor Secundária</label>
                <input
                    type="color"
                    name="secondaryColor"
                    value={settings.secondaryColor}
                    onChange={handleInputChange}
                />

                <button type="submit">Salvar Personalização</button>
            </form>
        </div>
    );
}

export default Personalization;
