docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=pruebaTecnica123' -p 1433:1433 --name sqlserver_pt -d mcr.microsoft.com/mssql/server:2019-latest
