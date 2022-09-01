import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === "GET") {


        //Find the absolute path of the json directory
        const jsonDirectory = path.join(process.cwd(), 'data');
        //Read the json data file data.json
        const fileContents = await fs.readFile(jsonDirectory + '/autosave.json', 'utf8');
        //Return the content of the data file in json format
        res.status(200).json(JSON.parse(fileContents));
    }

    else if (req.method === "POST"){
        //Find the absolute path of the json directory
        const jsonDirectory = path.join(process.cwd(), 'data');
        //Read the json data file data.json
        const fileContents = await fs.writeFile(jsonDirectory + '/test.json', '{"message":"Hello!"}', 'utf8');
        //Return the content of the data file in json format
        res.status(200).json({message: "POST!"});
    }
}
