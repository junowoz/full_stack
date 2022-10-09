--SELECT: Every time you want to query data from a Database
SELECT column1, column2 
FROM table_name;

--------------------------------------------------------------------
--AS: Allows you to rename a Column using an Alias in quotes '' (Does not actually change the column's Name)

SELECT column1 AS 'Alias'
FROM table_name;

--------------------------------------------------------------------
--DISTINCT: Selects info from a DB, with no repetition of values. Only Unique values.

SELECT DISTINCT column1 
FROM table_name;

--------------------------------------------------------------------
--WHERE: Filter that restricts our query results in order to obtain only the information we want.

SELECT *
FROM table_name
WHERE column > 8;

--------------------------------------------------------------------
--LIKE: Compare similar values

