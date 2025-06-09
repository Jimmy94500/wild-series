// server/src/modules/program/programActions.ts
import type { RequestHandler } from "express";
import programRepository from "../program/programRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const q = req.query.q as string | undefined;
    const programsFromDB = await programRepository.readAll(q);
    res.json(programsFromDB);
  } catch (err) {
    console.error("Erreur dans browse :", err);
    res.sendStatus(500);
  }
};

const read: RequestHandler = async (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  if (Number.isNaN(parsedId)) return res.sendStatus(400);

  try {
    const program = await programRepository.readById(parsedId);
    if (program) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error("Erreur dans read :", err);
    res.sendStatus(500);
  }
};

export default { browse, read };
