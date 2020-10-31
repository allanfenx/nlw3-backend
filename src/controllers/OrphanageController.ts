import { getRepository } from "typeorm";
import { Request, Response } from "express";

import Orphanage from "../models/Orphanages";
import OrphanageViews from "../views/OrphanageViews";

class OrphanageController{

    async index(req: Request, res: Response){

        const orphanageRepository = getRepository(Orphanage);

        const orphanages = await orphanageRepository.find({
            relations: ['images']
        });

        return res.json(OrphanageViews.renderMany(orphanages));
    }

    async store(req: Request, res: Response){

        const { name, latitude, longitude,
            about, instructions, opening_hours,
            open_on_weekends } = req.body;
    
        const orphanageRepository = getRepository(Orphanage);
    
        const requestImages = req.files as Express.Multer.File[];

        const images = requestImages.map(image => {

            return {path: image.filename}
        });

        const orphanage = orphanageRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        });
    
        await orphanageRepository.save(orphanage);
    
        return res.status(201).send(orphanage);
    }

    async show(req: Request, res: Response){

        const {id} = req.params;

        const orphanageRepository = getRepository(Orphanage);

        const orphanage = await orphanageRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return res.json(OrphanageViews.render(orphanage));
    }
}

export default new OrphanageController();