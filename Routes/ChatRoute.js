import express from "express";
import { isAuth } from "../Middlewares/isAuth.js";
import { addConversation, createChat, deleteChat, getAllChats, getConversation } from "../Controllers/chatController.js";

const router=express.Router();

router.post("/new",isAuth,createChat);
router.get('/all',isAuth,getAllChats);
router.post("/:id",isAuth,addConversation);
router.get("/:id",isAuth,getConversation);
router.delete("/:id",isAuth,deleteChat);
export default router