import {Router} from "express";
// import {Exepences} from "../mongoose/schemas/expence.mjs"

const router =Router();

router.get("/api/expense",(request,response)=>{
    const m="hello Welcome";
    return response.send(m);
});

export default router;