#!/bin/bash
npm run build
# ssh root@120.78.177.9 "mkdir /usr/local/nginx/fun-front"
scp -r ./dist/* root@120.78.177.9:/usr/local/nginx/fun-front
