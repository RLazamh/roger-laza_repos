# Create database conection

go to link https://cockroachlabs.cloud/ and create cluster

use the next command
cd src/administration
nest g module database

cd database
create file database.providers.ts

export const databaseProviders = [
and paste connection from cockroachlabs
and add
entities:[
Organization,
Tribe,
RepositoryEntity,
Metric
],
]
for more information
https://docs.nestjs.com/recipes/sql-typeorm

## License

**All rights reserved by ROGER LAZA**
changemain

### Developed by

**Roger Laza**
[![Build Status](https://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/github-icon.png)](https://github.com/RLazamh)
