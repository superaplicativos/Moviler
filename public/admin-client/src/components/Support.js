// /admin-client/src/components/Support.js
import React from 'react';

function Support() {
    return (
        <div className="support">
            <h1>Suporte</h1>
            <p>Entre em contato com nossa equipe de suporte através do e-mail suporte@empresa.com ou preencha o formulário abaixo:</p>
            <form>
                <label>Nome</label>
                <input type="text" name="name" />

                <label>E-mail</label>
                <input type="email" name="email" />

                <label>Mensagem</label>
                <textarea name="message"></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Support;
