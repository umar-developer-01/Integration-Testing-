"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
exports.prismaClient = new client_1.PrismaClient();
//docker run -p 5432:5432 -e POSTGRES_PASSWORD=KhanUmarKing$$$1 -d postgres
// docker ps
// npx prisma generate
// npx prisma migrate dev --name init 
// npx prisma studio
//docker kill <container_id>
//docker rm <container_id>
//docker compose up command to run the docker-compose.yml 
