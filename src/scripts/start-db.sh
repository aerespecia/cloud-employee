#!/bin/bash
set -e

SERVER="cloud_test_server";
PW="cloudTest123!";
DB="cloud_db";

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$SERVER] to start";
sleep 5;

# create the db 
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres
