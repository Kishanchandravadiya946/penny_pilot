import {Router} from "express";
import expenseRouter from "./expence.mjs"
import usermodelRouter from "./user.mjs"

const router =Router();
router.use(expenseRouter);
router.use(usermodelRouter);

export default router;