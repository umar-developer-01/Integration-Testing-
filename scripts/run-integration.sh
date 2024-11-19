#!/bin/bash

# Automatically export variables from the .env file
set -o allexport
source .env  # Load environment variables from .env file
set +o allexport

# Print the loaded environment variable to verify
echo "DATABASE_URL: $DATABASE_URL"

# Start Docker Compose services
docker-compose up -d

echo '🟡 - Waiting for database to be ready...'

# Wait for the database to be ready using the DATABASE_URL environment variable
./scripts/wait-for-it.sh "$DATABASE_URL" -- echo '🟢 - Database is ready!'

# Run Prisma migrations
npx prisma migrate dev --name init

# Run tests
npm run test

# Tear down Docker Compose services
docker-compose down
