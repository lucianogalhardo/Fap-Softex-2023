// app.js

const {Sequelize, DataTypes} = require('sequelize');
const config = require('./config/config.js');
const AlunosModel = require('./models/alunos.js');
const sequelize = new Sequelize(config.development);
const Alunos = AlunosModel(sequelize, DataTypes);
async function run() {

    try {
        //Cadastro de um Aluno 1
        const alunoCadastrado1 = await Alunos.create({
            nome: 'Luciano Galhardo',
            matricula: 102030
        });

        /*
         //Cadastro de um Aluno 2
        const alunoCadastrado2 = await Alunos.create({
            nome: 'Emanuel Galhardo',
            matricula: 405060
        });

         //Cadastro de um Aluno 3
        const alunoCadastrado3 = await Alunos.create({
            nome: 'João Galhardo',
            matricula: 708090
        });

         //Cadastro de um Aluno 4
        const alunoCadastrado4 = await Alunos.create({
            nome: 'Senhor Ninguém',
            matricula: 999999
        });

        */
        console.log('Aluno Cadastrado ID 1: ', alunoCadastrado1.toJASON());
        //console.log('Aluno Cadastrado ID 2: ', alunoCadastrado2.toJASON());
        //console.log('Aluno Cadastrado ID 3: ', alunoCadastrado3.toJASON());
        //console.log('Aluno Cadastrado ID 4: ', alunoCadastrado4.toJASON());

        // Leitura dos Alunos
        const alunos = await Alunos.findAll();
        console.log('Alunos Cadastrados:', alunos );//.map(p => p.toJASON()));

        // Atualizacao de dados do Aluno
        const alunosAtualizados = await Alunos.update(
            {nome: 'Luciano Ribeiro Galhardo'},
            {where: {id: alunoCadastrado1.id}}
        );

        /*
        // Remocao do aluno 4
        const alunoRemovido = await Alunos.destroy({where: {id: alunoCadastrado4.id}});

        console.log(
            'Aluno Removido: ', alunoRemovido > 0 ? 'Removido com Sucesso' : 'ID não encontrado'
        );

        */

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally {
        // Fechar conexão com banco de dados
        await Alunos.sequelize.close();
    }

}
run();