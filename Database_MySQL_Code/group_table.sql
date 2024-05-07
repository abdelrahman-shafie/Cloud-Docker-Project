CREATE DATABASE IF NOT EXISTS group_database;
USE group_database;

CREATE TABLE IF NOT EXISTS students (
    ID BIGINT,
    name VARCHAR(100),
    age INT,
    CGPA DECIMAL(3,2),
    department VARCHAR(255),
    PRIMARY KEY(ID)
);

INSERT INTO students (ID, name, age, CGPA, department) VALUES 
(2206183, 'Abdelrahman Ihab', 19, 2.88, 'Cyber Security'),
(2206202, 'Filopatire Awedallah', 19, 3.53, 'Cyber Security'),
(2206166, 'Mohamed Ezzat', 19, 2.94, 'Cyber Security'),
(2206213, 'Mahmoud Mohamed', 19, 2.09, 'Cyber Security'),
(2103116, 'Eyad Tamer Shehata', 20, 2.91, 'Intelligent Systems'),
(2022132, 'Khaled Ahmed Mansour', 20, 2.88, 'Intelligent Systems');
