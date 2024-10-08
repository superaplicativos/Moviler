// /super-admin/src/components/ClientManagement.js
import React from 'react';

function ClientManagement() {
    const clients = [
        { id: 1, name: 'Empresa 1', status: 'Ativo' },
        { id: 2, name: 'Empresa 2', status: 'Suspenso' }
    ];

    return (
        <div className="clients">
            <h1>Gestão de Clientes</h1>
            <div className="clients-header">
                <h2>Lista de Clientes</h2>
                <a href="#" className="add-client-btn">Adicionar Cliente</a>
            </div>
            <table className="clients-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.status}</td>
                            <td><a href="#">Ver Detalhes</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientManagement;
