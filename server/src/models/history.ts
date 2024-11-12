import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

import {User} from './user.js'

interface historyAtribute {
    id:number;
    lat:number;
    lon:number;
    date:string;
    probability:number;
    userId?:number;
}

interface historyCreationAtributes extends Optional<historyAtribute,"id"> { }


export class History extends Model<historyAtribute,historyCreationAtributes> implements historyAtribute{
    public id!:number
    public lat!:number;
    public lon!:number;
    public date!:string;
    public probability!:number;
    public userId!:number;
    public readonly historyUser?:User;
    public readonly createdAt!:Date;
}


export function HistoryFactory(sequelize:Sequelize):typeof History{
    History.init(
        {
            id:{
                type:DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,

            },
            lat:{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            lon:{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            date:{
                type:DataTypes.STRING,
            },
            probability:{
                type:DataTypes.INTEGER,
            },
            userId:{
                type:DataTypes.INTEGER,
                allowNull:false,
            }
        },{
            tableName:"history",
            sequelize

        }
    )
    
    return History

}
