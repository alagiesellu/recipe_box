#!/bin/bash

# deploy nginx server
docker-compose up -d

# deploy laravel backer
cd backend || exit
docker-compose up -d
docker-compose exec laravel composer install
docker-compose exec laravel php artisan key:generate
docker-compose exec laravel php artisan migrate
docker-compose exec laravel php artisan optimize

cd ../ && cd frontend || exit

# deploy vue.js frontend
docker-compose up -d
