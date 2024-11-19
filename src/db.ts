import { PrismaClient } from "@prisma/client";
export const prismaClient = new PrismaClient();

//docker run -p 5432:5432 -e POSTGRES_PASSWORD=KhanUmarKing$$$1 -d postgres
// docker ps
// npx prisma init
// npx prisma generate
// npx prisma migrate dev --name init
// npx prisma studio
//docker kill <container_id>
//docker rm <container_id>

//docker compose up command to run the docker-compose.yml

//use git bash
// curl <https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh> -o scripts/wait-for-it.sh
// Make the scripts executable:
// chmod +x scripts/*
// ./scripts/run-integration.sh
