#!/bin/bash

# down nginx server
docker-compose down

# down laravel backer
cd backend || exit
docker-compose down

cd ../ && cd frontend || exit

# down vue.js frontend
docker-compose down
