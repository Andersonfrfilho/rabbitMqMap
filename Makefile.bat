@echo off

:: This portion will use the paramter sent from cmd window.
call :%~1
goto :eof

:database-postgres
docker-compose -p cherry-go-compose up -d database-postgres
goto :eof

:database-mongo
docker-compose -p cherry-go-compose up -d database-mongo
goto :eof

:database-redis
docker-compose -p cherry-go-compose up -d database-redis
goto :eof

:kafka
docker-compose -f .\apache-kafka\docker-compose.yaml -p cherry-go-compose up -d
goto :eof

:databases
docker-compose -p cherry-go-compose up -d database-postgres
goto :eof

:databases:migrations
docker-compose -p cherry-go-compose up -d database-postgres && yarn migration:run
goto :eof

:all
docker-compose -p rabbit-mapper up -d&&cd ./applications/producer && npm run start:dev && cd .. && cd ./producer && npm run start:dev
goto :eof

:down
docker-compose -f .\apache-kafka\docker-compose.yaml down && docker-compose down
goto :eof

:eof
pause
