// import express from 'express';
// const router = express.Router();

// router.get('/collections', async (req, res) => {
//   try {
//     const collections = await req.app.locals.db.listCollections().toArray();
//     const collectionNames = collections.map(col => col.name);
//     res.json({ collections: collectionNames });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to list collections', details: err.message });
//   }
// });

// export default router;
