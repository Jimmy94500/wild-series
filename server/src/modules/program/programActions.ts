// server/src/modules/program/programActions.ts
import type { RequestHandler } from "express";
import programRepository from "../program/PprogramRepository";

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

  if (Number.isNaN(parsedId)) {
    res.sendStatus(400);
    return;
  }

  try {
    const program = await programRepository.readById(parsedId);
    if (program !== undefined && program !== null) {
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
