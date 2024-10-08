// /super-admin/src/components/CommissionSettings.js
import React, { useState } from 'react';

function CommissionSettings() {
    const [commission, setCommission] = useState('5%');

    const handleInputChange = (event) => {
        setCommission(event.target.value);
    };

    return (
        <div className="commission-settings">
            <h1>Configurações de Comissão</h1>
            <form>
                <label>Comissão Padrão</label>
                <input
                    type="text"
                    value={commission}
                    onChange={handleInputChange}
                />

                <button type="submit">Salvar Comissão</button>
            </form>
        </div>
    );
}

export default CommissionSettings;
