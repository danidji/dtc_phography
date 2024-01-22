import {database} from "../database/firebase";
import {PageContentType} from "../models/pages.interface";

const dbRef = database.ref("pages");

export const getPage = async (id: string): Promise<PageContentType> => {
    return (await dbRef.child(id).get()).val();
};
