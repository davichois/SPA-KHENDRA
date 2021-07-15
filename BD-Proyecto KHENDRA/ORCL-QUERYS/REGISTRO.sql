--Selecionar todos las tablas del USUARIO
SELECT * FROM USER_TABLES;

--Eliminar Tablas
drop table especializacion cascade constraints;

--Querys
ALTER SESSION SET NLS_DATE_FORMAT='DD/MM/YYYY';
SELECT SYSDATE FROM DUAL;

----PERSONA
DESC persona;
SELECT * FROM persona;
INSERT INTO persona VALUES(1,'David','Prada','76482052','davidprali@gmail.com','123','30/06/2002','M','1');
INSERT INTO persona VALUES(2,'Juan','Piedra','92375932','juan@gmail.com','123','10/04/2016','M','1');
INSERT INTO persona VALUES(3,'Julian','Link','23423852','julian@gmail.com','123','30/03/2010','M','1');
INSERT INTO persona VALUES(4,'Roberto','Pinedo','63436434','roberto@gmail.com','123','20/05/2000','M','1');
INSERT INTO persona VALUES(5,'Dina','Rivaldo','12531242','dina@gmail.com','123','18/01/2009','F','1');
INSERT INTO persona VALUES(6,'Gerald','Oropeza','76462612','gerald@gmail.com','123','30/06/2007','M','1');
INSERT INTO persona VALUES(7,'Helen','Oblitas','32256832','helen@gmail.com','123','10/04/2001','F','1');
INSERT INTO persona VALUES(8,'Estrellita','Mas','22486756','estrellita@gmail.com','123','30/06/1789','F','1');
----USUARIO
DESC usuario;
SELECT * FROM usuario;
INSERT INTO usuario VALUES('1', 1);
INSERT INTO usuario VALUES('0', 2);
INSERT INTO usuario VALUES('0', 6);
INSERT INTO usuario VALUES('0', 7);
INSERT INTO usuario VALUES('0', 8);
----ESPECIALIDAD
DESC especializacion;
SELECT * FROM especializacion;
INSERT INTO especializacion VALUES(1, 'Primaria');
INSERT INTO especializacion VALUES(2, 'Secundaria');
INSERT INTO especializacion VALUES(3, 'Educacion Universitaria');
INSERT INTO especializacion VALUES(4, 'Bachiller');
INSERT INTO especializacion VALUES(5, 'Licenciado');
----DOCENTE
DESC docente;
SELECT * FROM docente;
INSERT INTO docente VALUES(2, 3, 800);
INSERT INTO docente VALUES(4, 4, 1000);
INSERT INTO docente VALUES(1, 5, 400);
----CURSO
DESC curso;
SELECT * FROM curso;
INSERT INTO curso VALUES(1,'Calculo','Este es un curso de mocks de los mas mejores de calculo',3);
INSERT INTO curso VALUES(2,'Matematicas','Este es un curso de mocks de los mas mejores de matematicas',3);
INSERT INTO curso VALUES(3,'Fisica','Este es un curso de mocks de los mas mejores de fisica',4);
INSERT INTO curso VALUES(4,'Comunicacion','Este es un curso de mocks de los mas mejores comunicacion',5);
----MODULO
DESC modulo;
SELECT * FROM modulo;
INSERT INTO modulo VALUES(1,'Introduccion',1);
INSERT INTO modulo VALUES(2,'Introduccion',2);
INSERT INTO modulo VALUES(3,'Introduccion',3);
INSERT INTO modulo VALUES(4,'Introduccion',4);
INSERT INTO modulo VALUES(5,'Desarrollo',1);
INSERT INTO modulo VALUES(6,'Desarrollo',2);
INSERT INTO modulo VALUES(7,'Desarrollo',3);
INSERT INTO modulo VALUES(8,'Desarrollo',4);
INSERT INTO modulo VALUES(9,'Finalizacion',1);
INSERT INTO modulo VALUES(10,'Finalizacion',2);
INSERT INTO modulo VALUES(11,'Finalizacion',3);
INSERT INTO modulo VALUES(12,'Finalizacion',4);
----CLASE
DESC clase;
SELECT * FROM clase;
INSERT INTO clase VALUES(1,'Bienvenida','Este es un clase de bienvenida','https://www.youtube.com/watch?v=IOOcbIyoW_0',1);
INSERT INTO clase VALUES(2,'Bienvenida','Este es un clase de bienvenida','https://www.youtube.com/watch?v=IOOcbIyoW_0',2);
INSERT INTO clase VALUES(3,'Bienvenida','Este es un clase de bienvenida','https://www.youtube.com/watch?v=IOOcbIyoW_0',3);
INSERT INTO clase VALUES(4,'Bienvenida','Este es un clase de bienvenida','https://www.youtube.com/watch?v=IOOcbIyoW_0',4);
INSERT INTO clase VALUES(5,'Desarrollo','Este es un clase de desarrollo','https://www.youtube.com/watch?v=IOOcbIyoW_0',5);
INSERT INTO clase VALUES(6,'Desarrollo','Este es un clase de desarrollo','https://www.youtube.com/watch?v=IOOcbIyoW_0',6);
INSERT INTO clase VALUES(7,'Desarrollo','Este es un clase de desarrollo','https://www.youtube.com/watch?v=IOOcbIyoW_0',7);
INSERT INTO clase VALUES(8,'Desarrollo','Este es un clase de desarrollo','https://www.youtube.com/watch?v=IOOcbIyoW_0',8);
INSERT INTO clase VALUES(9,'Problema','Este es un clase de problemas','https://www.youtube.com/watch?v=IOOcbIyoW_0',5);
INSERT INTO clase VALUES(10,'Problema','Este es un clase de problemas','https://www.youtube.com/watch?v=IOOcbIyoW_0',6);
INSERT INTO clase VALUES(11,'Problema','Este es un clase de problemas','https://www.youtube.com/watch?v=IOOcbIyoW_0',7);
INSERT INTO clase VALUES(12,'Finalizacion','Este es un clase de Finalizacion','https://www.youtube.com/watch?v=IOOcbIyoW_0',9);
INSERT INTO clase VALUES(13,'Finalizacion','Este es un clase de Finalizacion','https://www.youtube.com/watch?v=IOOcbIyoW_0',10);
INSERT INTO clase VALUES(14,'Finalizacion','Este es un clase de Finalizacion','https://www.youtube.com/watch?v=IOOcbIyoW_0',11);
INSERT INTO clase VALUES(15,'Finalizacion','Este es un clase de Finalizacion','https://www.youtube.com/watch?v=IOOcbIyoW_0',12);
----INSCRIPCION
-- 0 = sin terminar, 1 = terminado
DESC inscripcion;
SELECT * FROM inscripcion;
INSERT INTO inscripcion VALUES(1,'26/02/2021',1,4,1,1);
INSERT INTO inscripcion VALUES(2,'25/05/2018',0,5,1,3);
INSERT INTO inscripcion VALUES(3,'05/01/2020',0,2,2,2);
INSERT INTO inscripcion VALUES(4,'15/05/2021',0,1,2,4);
INSERT INTO inscripcion VALUES(5,'30/04/2020',0,3,6,3);
INSERT INTO inscripcion VALUES(6,'15/02/2020',1,4,7,3);
INSERT INTO inscripcion VALUES(7,'13/04/2021',1,2,7,4);
INSERT INTO inscripcion VALUES(8,'12/08/2021',0,3,7,1);
INSERT INTO inscripcion VALUES(9,'02/11/2019',1,2,8,4);
INSERT INTO inscripcion VALUES(10,'04/12/2021',1,3,8,3);
----INSCRIPCIONCLASE
DESC inscripcionclase;
SELECT * FROM inscripcionclase;
-- 0 = sin terminar, 1 = terminado
INSERT INTO inscripcionclase VALUES(1, 1, 1, 1);
INSERT INTO inscripcionclase VALUES(2, 0, 1, 5);
INSERT INTO inscripcionclase VALUES(3, 1, 1, 9);
INSERT INTO inscripcionclase VALUES(4, 0, 1, 12);

INSERT INTO inscripcionclase VALUES(5, 1, 2, 3);
INSERT INTO inscripcionclase VALUES(6, 1, 2, 7);
INSERT INTO inscripcionclase VALUES(7, 1, 2, 11);
INSERT INTO inscripcionclase VALUES(8, 0, 2, 14);

INSERT INTO inscripcionclase VALUES(9, 1, 3, 2);
INSERT INTO inscripcionclase VALUES(10, 0, 3, 6);
INSERT INTO inscripcionclase VALUES(11, 0, 3, 10);
INSERT INTO inscripcionclase VALUES(12, 0, 3, 13);

INSERT INTO inscripcionclase VALUES(13, 0, 4, 2);
INSERT INTO inscripcionclase VALUES(14, 1, 4, 6);
INSERT INTO inscripcionclase VALUES(15, 0, 4, 10);

INSERT INTO inscripcionclase VALUES(16, 1, 5, 3);
INSERT INTO inscripcionclase VALUES(17, 1, 5, 7);
INSERT INTO inscripcionclase VALUES(18, 0, 5, 11);
INSERT INTO inscripcionclase VALUES(19, 0, 5, 14);

INSERT INTO inscripcionclase VALUES(20, 1, 6, 2);
INSERT INTO inscripcionclase VALUES(21, 0, 6, 6);
INSERT INTO inscripcionclase VALUES(22, 0, 6, 10);

INSERT INTO inscripcionclase VALUES(23, 1, 7, 2);
INSERT INTO inscripcionclase VALUES(24, 1, 7, 6);
INSERT INTO inscripcionclase VALUES(25, 1, 7, 10);

INSERT INTO inscripcionclase VALUES(26, 1, 8, 1);
INSERT INTO inscripcionclase VALUES(27, 1, 8, 5);
INSERT INTO inscripcionclase VALUES(28, 1, 8, 9);
INSERT INTO inscripcionclase VALUES(29, 0, 8, 12);

INSERT INTO inscripcionclase VALUES(30, 1, 9, 2);
INSERT INTO inscripcionclase VALUES(31, 0, 9, 6);
INSERT INTO inscripcionclase VALUES(32, 0, 9, 10);

INSERT INTO inscripcionclase VALUES(33, 1, 10, 3);
INSERT INTO inscripcionclase VALUES(34, 0, 10, 7);
INSERT INTO inscripcionclase VALUES(35, 1, 10, 11);
INSERT INTO inscripcionclase VALUES(36, 0, 10, 14);

