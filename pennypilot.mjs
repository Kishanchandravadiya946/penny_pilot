import express from "express";
import  mongoose   from "mongoose";
import routes from "./routes/index.mjs";

export function pennyPilot(){
    const app=express();
    app.use(express.json());
    app.use(routes);
    return app;
}