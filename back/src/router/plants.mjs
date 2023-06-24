import express from 'express';
import { getPlants, getPlant, createPlant, updatePlant, deletePlant } from '../controller/plants.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getPlant
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await getPlant(id);
    res.status(200).json(result);
})

// getPlants
router.get('/', authenticate, async (req, res) => {
    const results = await getPlants();
    res.status(200).json(results);
});

// createPlant
router.post('/', authenticate, async (req, res) => {
    const result = await createPlant(req.body);
    res.status(200).json(result);
});

// createPlant
router.put('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await updatePlant(id, req.body);
    res.status(200).json(result);
});

// createPlant
router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await deletePlant(id);
    res.status(200).json(result);
});

export default router;