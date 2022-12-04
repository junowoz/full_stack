-- MULTIPLE TABLES
/*
 In this lesson, we’ll learn the SQL commands that will help us work with data that is stored in multiple tables.

In this example, we have 3 tables: orders, subscriptions and customers.
*/
----------------------------------------------------------------------------------
-- Combining Tables with SQL: JOIN

SELECT *
FROM table3
JOIN table2
  ON table3.table2column = table2.table2column;

-- With a condition

SELECT *
FROM table3
JOIN table2
  ON table3.table2column1 = table2.table2column1;
  WHERE table2.table2column2 = 'Some condition';

----------------------------------------------------------------------------------
-- Inner Joins: Only the ones who are the same within the tables.
-- This command joins 2 tables that are simmilar.

----------------------------------------------------------------------------------
-- Left Joins

----------------------------------------------------------------------------------
--Primary Jey vs Foreign Key

----------------------------------------------------------------------------------
--Cross Join

----------------------------------------------------------------------------------
-- Union

----------------------------------------------------------------------------------
-- With

----------------------------------------------------------------------------------
-- Review

