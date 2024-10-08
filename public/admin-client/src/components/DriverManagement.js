// /admin-client/src/components/DriverManagement.js
import React from 'react';

function DriverManagement() {
    const drivers = [
        { id: 1, name: 'João Silva', status: 'Ativo' },
        { id: 2, name: 'Maria Souza', status: 'Inativo' }
    ];

    return (
        <div className="drivers">
            <h1>Gestão de Motoristas</h1>
            <div className="drivers-header">
                <h2>Lista de Motoristas</h2>
                <a href="#" className="add-driver-btn">Adicionar Motorista</a>
            </div>
            <table className="drivers-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver) => (
                        <tr key={driver.id}>
                            <td>{driver.id}</td>
                            <td>{driver.name}</td>
                            <td>{driver.status}</td>
                            <td><a href="#">Ver Detalhes</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DriverManagement;
