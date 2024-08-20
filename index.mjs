import mongoose from "mongoose";
import express from 'express';
import {pennyPilot} from "./pennypilot.mjs"

mongoose.connect("mongodb://localhost/penny_pilot")
        .then(()=>console.log("Connected to Database"))
        .catch((err)=>console.log(`Error :${err}`));

const app=pennyPilot();

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Running on port ${PORT}`);
})