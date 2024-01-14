import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  router.get("/", homeController.handlerHelloWorld);
  router.get("/user", homeController.handlerUserPage);
  router.post("/user/create-user", homeController.handlerCreateNewUser);
  router.post("/user/delete-user/:id", homeController.handlerDeleteUser);
  router.get("/user/edit-user/:id", homeController.handlerEditUser);
  router.post("/user/edit-user", homeController.handlerUpdateUser);
  return app.use("/", router);
};
export default initWebRoutes;
