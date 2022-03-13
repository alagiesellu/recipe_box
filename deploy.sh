#!/bin/bash

docker-compose up -d
cd backend && docker-compose up -d
cd ../
cd frontend && docker-compose up -d
