import express from "express";
// import { deleteUser } from "../../client/src/APIcalling/api.js";

import {adduser} from "../controller/controller.js";
import {getusers, getUser ,editUser, deleteUser} from "../controller/controller.js";

  const router = express.Router()


router.post('/add',adduser)
router.get('/all',getusers)
router.get('/:id',getUser);
router.post('/:id', editUser);
router.delete('/:id',deleteUser)



export default router;