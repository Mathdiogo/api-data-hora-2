import express from 'express';
import cors from 'cors';  // Corrigido de 'cons' para 'cors'

const app = express();

app.use(cors());  // Corrigido de cons() para cors()

app.get('/api/date', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
        status: 'API no Render funcionando!'
    });
});

// Porta dinâmica para o Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);  // Corrigido para template string
});