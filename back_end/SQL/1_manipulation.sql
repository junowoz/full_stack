--Introduction to SQL: aqui estamos retornando informação de uma base de dados.
SELECT * FROM celebs;

--Statements
CREATE TABLE table_name (
    column_1 data_type,
    column_2 data_type,
    column_3 data_type
);

--Create Table: means create a new table, celebs: name of the table
CREATE TABLE celebs(
    id INTEGER, --these are columns, parameters
    namme TEXT,
    age INTEGER
);

--Insert: The INSERT statement inserts a new row into a table.
--INSERT INTO: Adds rows
--(id, name, age): parameter of data
--VALUES: Following data will be inserted.
--(a,b,c): The data

INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 22);

INSERT INTO celebs (id, name, age) 
VALUES (2, 'Beyonce Knowles', 33); 
 
INSERT INTO celebs (id, name, age) 
VALUES (3, 'Jeremy Lin', 26); 
 
INSERT INTO celebs (id, name, age) 
VALUES (4, 'Taylor Swift', 26);

--Select: Is used to fetch data from a database. Return data.
--SELECT:Is a clause that indicates that the statement is a query.
--name:Specifies the column to query data from.
--FROM:Specifies the name of the table to query data from.
--You can also query data from all columns in a table with SELECT.
-- *: It allows you to select every column in a table
-- SELECT statements always return a new table called the result set.

SELECT * FROM celebs;

--Alter
-[=asdflksdfklasdf]