'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Planos extends Model {
        static associate(models) {
            // this.hasMany(models.Favoritos, { foreignKey: 'id_usuario' });
            // this.belongsTo(models.Planos, { foreignKey: 'plano_id' }); // Caso tenha a tabela 'planos'
        }
    }

    Planos.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        max_favoritos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        max_comparacoes_diarias: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pode_salvar_favoritos: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Planos',
        tableName: 'planos',
        timestamps: true,
    });

    return Planos;
}