#!/bin/bash
cd /home/ubuntu/DEVzine-port/server

authbind --deep pm2 start app.js
npx sequelize-cli db:seed:all
