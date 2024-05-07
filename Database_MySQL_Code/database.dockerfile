FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=rootadmin
ENV MYSQL_DATABASE=group_database

WORKDIR /var/lib/mysql

COPY ./group_table.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD [ "mysqld" ]