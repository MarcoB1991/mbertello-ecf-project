
CREATE DATABASE personal_project_ecf;

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON personal_project_ecf.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;
