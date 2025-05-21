import fs from 'fs';
import path from 'path';

import { Router } from "express";
const router = Router();

const full_current_directory = path.dirname(import.meta.url).replace(/^file:\/+/, '');

const ClimbRoute = async (route = '', sub_routes = ['/']) => {
    const files = fs.readdirSync(route);

    for(const file_path of files) {
        if(file_path == 'index.js') continue;

        const is_directory = fs.lstatSync(path.join(route, file_path)).isDirectory();

        if(is_directory) {
            const full_path = path.join(route, file_path);
            return ClimbRoute(full_path, [...sub_routes, file_path]);
        }

        const file_route = file_path.replace(/(?:\.route[rs]*)?\.[tj]s$/, '')
        const full_file_route = path.join(...sub_routes, file_route).replace(/\\/g, '/');

        console.log(`Router found for ${full_file_route}`);

        try {
            const file_router = (await import('file:///' + path.join(route, file_path).replace(/\\/g, '/'))).default;
    
            console.log(`router.use("${full_file_route}", file_router)`);
            router.use(full_file_route, file_router);
        } catch(e) {
            console.error(`Could not load route [${full_file_route}]. Does the file export the router?\n '-> ${e.message}`);
        }
    }
}

export const ConfigureRoutes = async () => {
    ClimbRoute(full_current_directory);

    router.get('/', (req, res) => {
        return res.json({ base: true });
    })

    return router;
}
