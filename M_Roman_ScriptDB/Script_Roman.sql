create database M_Roman;
use M_Roman;

create table Professores (
	IdProfessor		INT PRIMARY KEY IDENTITY
	,Nome			VARCHAR(250)
	,Email			VARCHAR(250) not null
	,Senha			VARCHAR(250) not null
);

create table Temas(
	IdTema			INT PRIMARY KEY IDENTITY
	,Nome			VARCHAR(250)
);
 
create table Projetos(
	IdProjeto		INT PRIMARY KEY IDENTITY
	,Nome			VARCHAR(250)
	,IdTema			INT FOREIGN KEY REFERENCES Temas(IdTema)
);

insert into Professores (Nome, Email, Senha)
 values  ('Erik Vitelli', 'erik@email.com', 123123)
		,('Helena Strada', 'helena@email.com', 134134);

insert into Temas (Nome)
 values  ('RPG')
		,('Cinema');

insert into Projetos (Nome, IdTema)
 values  ('Listar Goblins', 1)
		,('Listar Lançamentos', 2);


select * from Professores;
select * from Temas;
select * from Projetos;