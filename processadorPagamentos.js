function processarTransacaoPix(chavePix, valor, callbackAcao) {
    if (valor <= 0) {
        console.log("Erro: o valor deve ser maior que zero.");
        return;
    }

    const transacao = {
        id: Math.floor(Math.random() * 100000),
        chavePix: chavePix,
        valor: valor,
        data: new Date().toLocaleTimeString()
    };

    console.log("\nTransação processada com sucesso!");
    callbackAcao(transacao);
}

// Callback para emitir comprovante por e-mail
function emitirComprovantePorEmail(transacao) {
    console.log("\n--- Comprovante por E-mail ---");
    console.log("ID da transação: " + transacao.id);
    console.log("Valor: R$ " + transacao.valor.toFixed(2));
    console.log("Destinatário: " + transacao.chavePix);
}

// Callback para creditar cashback
function creditarCashback(transacao) {
    const cashback = transacao.valor * 0.02;

    console.log("\n--- Cashback ---");
    console.log("Valor do pagamento: R$ " + transacao.valor.toFixed(2));
    console.log("Cashback concedido: R$ " + cashback.toFixed(2));
}

// Callback para auditar transação suspeita
function auditarTransacaoSuspeita(transacao) {
    console.log("\n--- Auditoria Antifraude ---");

    if (transacao.valor > 5000) {
        console.log("ALERTA: Bandeira vermelha!");
        console.log("Transação enviada para análise antifraude.");
    } else {
        console.log("Transação sem alerta por valor elevado.");
    }
}

// Teste 1: Comprovante por e-mail
processarTransacaoPix("cliente@email.com", 150, emitirComprovantePorEmail);

// Teste 2: Cashback
processarTransacaoPix("cliente@email.com", 200, creditarCashback);

// Teste 3: Auditoria antifraude
processarTransacaoPix("cliente@email.com", 6000, auditarTransacaoSuspeita);

// Teste 4: Arrow Function com desconto de R$ 5,00
processarTransacaoPix("cliente@email.com", 100, (transacao) => {
    const valorFinal = transacao.valor - 5;

    console.log("\n--- Desconto ---");
    console.log("Valor original: R$ " + transacao.valor.toFixed(2));
    console.log("Desconto: R$ 5,00");
    console.log("Valor com desconto: R$ " + valorFinal.toFixed(2));
});

// Função para enviar webhook de forma assíncrona
function enviarWebhookAssincrono(transacao, callbackFinalizacao) {
    console.log("\nWebhook agendado às " + new Date().toLocaleTimeString());

    setTimeout(() => {
        console.log("Webhook executado às " + new Date().toLocaleTimeString());
        callbackFinalizacao(transacao);
    }, 2000);
}

// Teste 5: Webhook assíncrono
processarTransacaoPix("loja@email.com", 300, (transacao) => {
    enviarWebhookAssincrono(transacao, (resultado) => {
        console.log("Notificação enviada para a loja!");
        console.log("ID da transação: " + resultado.id);
    });
});
