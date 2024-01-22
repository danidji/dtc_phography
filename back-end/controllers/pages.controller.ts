import type {NextApiRequest, NextApiResponse} from "next";

import {getPage} from "../repositories/pages.repository";
import {PageContentType} from "../models/pages.interface";

export const processGetPage = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const id: string = req.query.id as string;

        let pageContent: PageContentType | null = null;

        pageContent = await getPage(id);
        if (pageContent === null) {
            throw Error("Pas de résultat");
        }

        res.status(200).json(pageContent);
    } catch (err) {
        const errorMessage: string = err instanceof Error ? err.message : "Erreur serveur";

        res.status(500).json({statusCode: 500, message: errorMessage});
    }
};
