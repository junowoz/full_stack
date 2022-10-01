--Introduction to SQL: aqui estamos retornando informação de uma base de dados.
SELECT * FROM celebs;

------------------------------------------------------------------------------------

--Statements
CREATE TABLE table_name (
    column_1 data_type,
    column_2 data_type,
    column_3 data_type
);

------------------------------------------------------------------------------------

--Create Table: means create a new table, celebs: name of the table
CREATE TABLE celebs(
    id INTEGER, --these are columns, parameters
    namme TEXT,
    age INTEGER
);

------------------------------------------------------------------------------------

--Insert: The INSERT statement inserts a new row into a table.
--INSERT INTO: Adds rows
--(id, name, age): parameter of data
--VALUES: Following data will be inserted.
--(a,b,c): The data

INSERT INTO table_name (column1, column2, column3) 
VALUES (value1, value2, value3);

------------------------------------------------------------------------------------

--Select: Is used to fetch data from a database. Return data.
--SELECT:Is a clause that indicates that the statement is a query.
--name:Specifies the column to query data from.
--FROM:Specifies the name of the table to query data from.
--You can also query data from all columns in a table with SELECT.
-- *: It allows you to select every column in a table
-- SELECT statements always return a new table called the result set.

SELECT * FROM celebs;

------------------------------------------------------------------------------------

--Alter: Adds a new column to a table.
--ALTER TABLE is a clause that lets you make the specified changes.
    --name: of the table.
--ADD COLUMN is a clause that lets you add a new column to a table.
    --name of the column
    --TEXT is the data type for the new column

ALTER TABLE table_name
ADD COLUMN column DATA_TYPE;

SELECT * FROM celebs;

------------------------------------------------------------------------------------

--UPDATE: This statement edits a row in a table.
--SET is a clause that indicates the column to edit.
--WHERE is a clause that indicates which row(s) to update with the new column value.
UPDATE celebs
SET twitter_handle = '@taylorswift13' WHERE id = 4;
SELECT * FROM celebs;

------------------------------------------------------------------------------------

--DELETE: Deletes rows from a table.
    --DELETE FROM name_of_table
    --WHERE name_row IS NULL;
    --IS NULL: returns true when the value is NULL
DELETE FROM celebs
WHERE twitter_handle IS NULL;

SELECT * FROM celebs;

------------------------------------------------------------------------------------

--CONSTRAINS: Adds information to the
    --PRIMARY KEY columns can be used to uniquely identify the row
    --UNIQUE columns have a different value for every row.
    -- NOT NULL columns must have a value. 
    --DEFAULT columns take an additional argument

CREATE TABLE awards(
    id INT PRIMARY KEY,
    recipient TEXT NOT NULL,
    award_name TEXT DEFAULT 'Grammy',
);

--------------------------------------------------------------
--PROJECT | CREATE A TABLE

CREATE TABLE friends(
    id INTEGER,
    name TEXT,
    birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940-05-30');

INSERT INTO friends (id, name, birthday)
VALUES (2, 'Anne', '2003-07-08');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'Juan', '1947-08-10');

UPDATE friends
SET name = 'Storm' 
WHERE id = 1;

ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;

DELETE FROM friends
WHERE id = 1;

SELECT * FROM friends;
