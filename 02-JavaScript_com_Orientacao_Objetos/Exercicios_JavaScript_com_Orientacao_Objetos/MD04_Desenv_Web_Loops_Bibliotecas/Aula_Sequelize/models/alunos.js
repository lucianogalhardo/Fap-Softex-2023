//const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Alunos = sequelize.define ('Alunos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

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