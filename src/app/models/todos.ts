import { Schema } from "mongoose";

export class Todo {
    _id :Schema.Types.ObjectId;
    title:string;
    date:string;
    description:string;
    done:boolean;
    isDaily:boolean;
    list:{type:Schema.Types.ObjectId , ref:'List'}
}