import express from 'express';
const server = express(); 

server.use(express.json());// Para poder enviar um json
// Usando middleware global como exemplos.
server.use((req,res, next) =>{
    console.log('Requisição Chamada!');
    return next();
})
const cursos = ['java','HTML','CSS','JS','Node'];
// Trasendo um curso pelo index
server.get('/cursos/:index', (req, res) =>{
    const index = req.params.index;
    return res.json(cursos[index]);
})
// Prasendo a lista toda de cursos
server.get('/cursos',(req, res) =>{
    return res.json(cursos);
})
// usando o request body para enviar um json
server.post('/cursos', (req,res) =>{
    const {name} = req.body;
    cursos.push(name);
    return res.json(cursos);
})
// Fazendo um update, atualizando um curso.
server.put('/cursos/:index',(req,res)=>{
    const {index} = req.params;
    const {name} = req.body;
    cursos[index] = name;

    return res.json(cursos);
})
// Deletando um item
server.delete('/cursos/:index', (req,res) =>{
    const {index} = req.params;
    cursos.splice(index,1);
    return res.json({message:'Curso deletado.'});
})

// Caminho do servidor
server.listen(3000);