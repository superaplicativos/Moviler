// /super-admin/src/components/Settings.js
import React, { useState } from 'react';

function Settings() {
    const [settings, setSettings] = useState({
        appName: 'Super App de Mobilidade',
        currency: 'BRL',
        defaultCommission: '5%'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSettings({ ...settings, [name]: value });
    };

    return (
        <div className="settings">
            <h1>Configurações Globais</h1>
            <form>
                <label>Nome do Aplicativo</label>
                <input
                    type="text"
                    name="appName"
                    value={settings.appName}
                    onChange={handleInputChange}
                />

                <label>Moeda Padrão</label>
                <input
                    type="text"
                    name="currency"
                    value={settings.currency}
                    onChange={handleInputChange}
                />

                <label>Comissão Padrão</label>
                <input
                    type="text"
                    name="defaultCommission"
                    value={settings.defaultCommission}
                    onChange={handleInputChange}
                />

                <button type="submit">Salvar Configurações</button>
            </form>
        </div>
    );
}

export default Settings;
