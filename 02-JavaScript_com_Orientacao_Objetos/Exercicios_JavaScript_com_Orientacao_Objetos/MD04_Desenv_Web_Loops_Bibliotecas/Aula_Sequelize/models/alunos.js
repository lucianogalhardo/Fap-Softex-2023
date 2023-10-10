//const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define ('Alunos', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false

    },


});

    return Alunos;
};