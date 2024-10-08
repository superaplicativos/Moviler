// /app-passenger/src/components/Profile.js

import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('Paulo Oliveira');
    const [email, setEmail] = useState('paulo@example.com');

    const updateProfile = () => {
        // Lógica para atualizar o perfil
        console.log('Atualizando perfil para:', name, email);
    };

    return (
        <div className="profile">
            <h1>Perfil do Passageiro</h1>
            <label>Nome</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>E-mail</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={updateProfile}>Atualizar Perfil</button>
        </div>
    );
}

export default Profile;
