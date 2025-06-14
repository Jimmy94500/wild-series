import express from "express";
const router = express.Router();
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

/* ************************************************************************* */

// QUETE 03 - JS MONOREPO : ROUTING

import programActions from "./modules/program/programActions";

router.get("/api/programs", programActions.browse);

// QUETE 04 - JS MONOREPO : ROUTING AVANCE
import categoryActions from "./modules/category/categoryActions";

router.get("/api/programs/:id", programActions.read);
router.get("/api/categories/", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

// Declaration of a "Welcome" route

import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

export default router;
