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