import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../common/sequelize/connect.sequelize.js";

const Article = sequelize.define(
   "Article",
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false ,
            autoIncrement : true,
            primaryKey : true,

        },
        title :{
            type: DataTypes.STRING,

        },
        content: {
            type: DataTypes.STRING,

        },
        imageUrl: {
            type: DataTypes.STRING,

        },
        views: {
            type: DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0,
        },
        userId : {
             type: DataTypes.INTEGER,
             allowNull : false,
             references :{
                model: "Users",
                key : "id",

             }

        },
        deletedBy :{
            type : DataTypes.INTEGER,
            validate : 0
        },
        isDeleted :{
            type : DataTypes.BOOLEAN,
            validate: 0,
        },
        deletedAt : {
            type : "TIMESTAMP",
            defaultValue : null ,
            allowNull : true,
            

        },
        createdAt : {
             type : "TIMESTAMP",
            defaultValue : Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull : false,
            
        },
        updatedAt :{
             type : "TIMESTAMP",
            defaultValue : Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP") ,
            allowNull : false,
        }

    },

    {
        tableName: "Articles",
        timestamps : false,
    },
);

export default Article;
