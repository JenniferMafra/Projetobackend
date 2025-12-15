"# Projetobackend" 
USE my-db;

CREATE TABLE clientes(id VARCHAR(36) PRIMARY KEY NOT NULL, nome VARCHAR(65) NOT NULL, cpf VARCHAR(11) NOT NULL UNIQUE, endereco VARCHAR(100) NOT NULL, telefone VARCHAR(20) NOT NULL, dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO clientes (id,nome, cpf,endereco,telefone) VALUES ("2","carlos", "840329929","rua fulanos","2222939393
");
