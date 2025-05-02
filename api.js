import express from 'express';
import cors from 'cors';  // Corrigido de 'cons' para 'cors'

const app = express();

app.use(cors());  // Corrigido de cons() para cors()

app.get('/', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-BR'),  // Corrigido tolocaleString para toLocaleString
        status: 'API no Render funcionando!'
    });
});  // Removidas as chaves extras

// Porta dinâmica para o Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);  // Corrigido para template string
});