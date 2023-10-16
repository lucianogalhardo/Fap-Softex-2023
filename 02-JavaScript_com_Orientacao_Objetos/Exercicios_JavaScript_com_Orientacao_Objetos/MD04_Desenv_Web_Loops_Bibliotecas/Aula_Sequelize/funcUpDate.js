// app.js

const {Sequelize, DataTypes} = require('sequelize');
const config = require('./config/config.js');
const AlunosModel = require('./models/alunos.js');
const sequelize = new Sequelize(config.development);
const Alunos = AlunosModel(sequelize, DataTypes);
async function run() {

    try {

       
        // Atualizacao de dados do Aluno
        const alunosAtualizados = await Alunos.update(
            {matricula: 404040},
            {where: {id: 4}}
        );

        //console.log('Aluno Cadastrado: ', alunosAtualizados);
        
    

        // Leitura dos Alunos
        const alunos = await Alunos.findAll();
        console.log('Alunos Alterados:', alunos.map(p => p.toJSON()));



        

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally {
        // Fechar conexão com banco de dados
        await Alunos.sequelize.close();
    }

}
run();