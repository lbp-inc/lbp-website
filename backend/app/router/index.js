import express from "express";
const router = express.Router();

import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, forgetPassword, resetPassword, emailVerify, getUserGroups, getUserListByGroup, sendMessage, getUnreadMsgNum, getMsgList,getrole, emailCodeMatch} from "../controllers/userController.js";
import { savePreviewPage, loadPreviewPage } from "../controllers/editController.js";

import { admin } from "../utils/authHandler.js";
import { get } from "mongoose";

router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
//router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.post("/getInfo", getUserProfile);
router.post("/updateInfo", updateUserProfile);
router.post("/verify-email", emailVerify);
router.post("/get-role", getrole);
router.post("/match_code", emailCodeMatch);

router.route("/get-user-groups").get(admin, getUserGroups);
router.route("/get-user-list-by-group").post(admin, getUserListByGroup);
router.route("/send-message").post(admin, sendMessage);
router.route("/get-unread-msg-num").get(getUnreadMsgNum);
router.route("/get-msg-list").get(getMsgList);

//From content group
router.post("/save-content", savePreviewPage);
router.get("/load-content/:pageKey", loadPreviewPage);

export default router;
