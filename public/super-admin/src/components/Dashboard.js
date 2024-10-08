// /super-admin/src/components/Dashboard.js
import React from 'react';

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard - Super Admin</h1>
            <div className="dashboard-grid">
                <div className="metric-box">
                    <h2>Total de Clientes</h2>
                    <p>30</p>
                </div>
                <div className="metric-box">
                    <h2>Corridas Ativas</h2>
                    <p>120</p>
                </div>
                <div className="metric-box">
                    <h2>Motoristas Online</h2>
                    <p>200</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
