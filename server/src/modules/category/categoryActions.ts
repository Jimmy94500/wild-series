// Some data to make the trick
import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((uneCategorie) =>
      uneCategorie.name.includes(req.query.q as string),
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const categorieId = categories.find((p) => p.id === parseId);

  if (categorieId != null) {
    res.json(categorieId);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
