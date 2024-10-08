// /admin-client/src/components/PaymentSettings.js
import React, { useState } from 'react';

function PaymentSettings() {
    const [settings, setSettings] = useState({
        stripeKey: 'chave-xxxx-xxxx',
        commission: '10%',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSettings({ ...settings, [name]: value });
    };

    return (
        <div className="payments-settings">
            <h1>Configurações de Pagamento</h1>
            <form>
                <label>Chave API Stripe</label>
                <input
                    type="text"
                    name="stripeKey"
                    value={settings.stripeKey}
                    onChange={handleInputChange}
                />

                <label>Comissão (%)</label>
                <input
                    type="text"
                    name="commission"
                    value={settings.commission}
                    onChange={handleInputChange}
                />

                <button type="submit">Salvar Configurações</button>
            </form>
        </div>
    );
}

export default PaymentSettings;
