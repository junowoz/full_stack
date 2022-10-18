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
WHERE column1 > 8;

/*
Comparison operators used with the`WHERE`clause are:

- `=`equal to
- `!=`not equal to
- `>`greater than
- `<`less than
- `>=`greater than or equal to
- `<=`less than or equal to
*/
--------------------------------------------------------------------
--LIKE: Compare similar values
SELECT *
FROM table_name
WHERE column1 LIKE 'va_ue';

-- The _ means you can substitute any individual character here without breaking the pattern.

/* % is a wildcard character that matches zero or more missing letters in the pattern.
    % is where it stops searching
    A% matches all movies with names that begin with letter ‘A’
    %a matches all movies that end with ‘a’
    %man% any movie that contains the word ‘man’
    LIKE is not case sensitive.
*/
SELECT *
FROM table_name
WHERE column1 LIKE '%value';

--------------------------------------------------------------------
-- Is Null
/*
Unknown values are indicated by NULL.
We will have to use these operators:
- IS NULL
- IS NOT NULL
*/

SELECT column1
FROM table_name 
WHERE column1 IS NOT NULL;

--------------------------------------------------------------------
--Between
-- The BETWEEN operator is used in a WHERE clause to filter the result set within a certain range. 
-- It accepts two values that are either numbers, text or dates.

SELECT *
FROM table_name
WHERE column1 BETWEEN row1 AND row2;
--------------------------------------------------------------------
--And
/*
AND operator displays a row if all the conditions are true.

Sometimes we want to combine multiple conditions in a WHERE clause to make the result set more specific and useful.
- column1 BETWEEN row1 AND row2; is the 1st condition.
- column2 = 'row3'; is the 2nd condition.
AND combines the two conditions.
Both conditions should be true.
*/

SELECT *
FROM table_name
WHERE column1 BETWEEN row1 AND row2;
  AND column2 > value;

SELECT *
FROM table_name
WHERE column1 < value
  AND column1 = 'row2';

--------------------------------------------------------------------
--Or
/*
OR operator displays a row if any condition is true.
With OR, if any of the conditions are true, then the row is added to the result.
*/

SELECT *
FROM table_name
WHERE column1 < value
  OR column1 = 'row2';
--------------------------------------------------------------------
--Order By
/*
ORDER BY is a clause that indicates you want to sort the result set by a particular column.
We can sort the results using ORDER BY, either alphabetically or numerically. 
Sorting the results often makes the data more useful and easier to analyze.

DESC is a keyword used in ORDER BY to sort the results in descending order (high to low or Z-A).
ASC is a keyword used in ORDER BY to sort the results in ascending order (low to high or A-Z).

Note: ORDER BY always goes after WHERE (if WHERE is present).
*/

SELECT *
FROM table_name
WHERE column1 < value
    ORDER BY column1 DESC;

SELECT column1, column2, column3
FROM table_name
WHERE column1 < value
    ORDER BY column1 DESC;
--------------------------------------------------------------------
--Limit
/*
LIMIT is a clause that lets you specify the maximum number of rows the result set will have.
LIMIT always goes at the very end of the query. Also, it is not supported in all SQL databases.
*/
SELECT *
FROM table_name
LIMIT 10; --number of rows

-- Example: Returns the top 3 highest rated movies.
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
--------------------------------------------------------------------
--Case

