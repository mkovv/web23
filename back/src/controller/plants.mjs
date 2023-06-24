import { get, getByName, getAll, create, update, remove } from '../services/plants.mjs';

const getPlant = async (id) => {
    const result = await get(id);
    return result;
}

const getPlants = async () => {
    const results = await getAll();
    return results;
}

const createPlant = async (body) => {
    const existing = await getByName(body.name);

    if (existing) {
        return res.status(400).send('Plant already exists!');
    }

    const plant = {
        name: body.name,
        price: body.price,
        size: body.size,
        water: body.water,
        light: body.light,
        createDate: Date.now(),
        updatedDate: Date.now()
    }

    const result = await create(plant);

    return result;
}

const updatePlant = async (id, body) => {
    const result = await update(id, body);
    return result;
}

const deletePlant = async (id) => {
    const result = await remove(id);
    return result;
}

export {
    getPlant,
    getPlants,
    createPlant,
    updatePlant,
    deletePlant
}

