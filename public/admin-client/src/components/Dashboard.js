// /admin-client/src/components/Dashboard.js
import React from 'react';

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard - Cliente</h1>
            <div className="dashboard-grid">
                <div className="metric-box">
                    <h2>Motoristas Ativos</h2>
                    <p>25</p>
                </div>
                <div className="metric-box">
                    <h2>Corridas Ativas</h2>
                    <p>40</p>
                </div>
                <div className="metric-box">
                    <h2>Receita Total</h2>
                    <p>R$ 5.000,00</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
