// /app-driver/src/components/Profile.js

import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('João Silva');
    const [email, setEmail] = useState('joao@example.com');

    const handleProfileUpdate = () => {
        // Lógica para atualizar o perfil
        console.log('Perfil atualizado:', { name, email });
    };

    return (
        <div className="profile">
            <h1>Perfil do Motorista</h1>
            <label>Nome:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>E-mail:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleProfileUpdate}>Atualizar Perfil</button>
        </div>
    );
}

export default Profile;
