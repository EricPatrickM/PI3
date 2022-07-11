import express from "express";

export default class App{
    public server : express.Application
    constructor(){
        this.server = express()
    }
}