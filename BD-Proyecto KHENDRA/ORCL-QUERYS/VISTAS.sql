
--VISTAS

---VISTA 01/DAVID
CREATE OR REPLACE VIEW KV_DOCENTE AS
SELECT P.ID_PERSONA, P.NOMBRE, P.APELLIDO, P.DNI,P.CORREO, P.CONTRASEŅA,
P.EDAD, P.SEXO, P.ESTADO, D.SUELDO, E.ESPECIALIZACION, C.NOMBRE_CURSO
FROM PERSONA P JOIN DOCENTE D
ON P.ID_PERSONA=D.KFK_PER JOIN ESPECIALIZACION E
ON E.ID_ESPECIALIZACION=D.KFK_ESPE JOIN CURSO C
ON C.KFK_DOCE=D.KFK_PER
WHERE P.ESTADO=1;
 
--Consultar VIEW
SELECT * FROM KV_DOCENTE;

---VISTA 02/HELEN
CREATE OR REPLACE VIEW KV_USUARIO AS
SELECT P.ID_PERSONA, P.NOMBRE, P.APELLIDO, P.DNI,P.CORREO, P.CONTRASEŅA,
P.EDAD, P.SEXO, P.ESTADO, U.ADMIN
FROM PERSONA P JOIN USUARIO U 
ON P.ID_PERSONA=U.KFK_PER
WHERE P.ESTADO=1;

--Consultando vista
SELECT * FROM KV_USUARIO;

---VISTA 03/KATERIN
CREATE OR REPLACE VIEW KV_CURSO AS
SELECT P.ID_PERSONA, P.NOMBRE, P.APELLIDO, P.DNI, P.CORREO, P.CONTRASEŅA, P.EDAD, P.SEXO, P.ESTADO, C.NOMBRE_CURSO
FROM PERSONA P JOIN CURSO C
ON P.ID_PERSONA=c.id_curso
WHERE P.ESTADO=1;

--Consultando vista
SELECT * FROM KV_CURSO;

---VISTA 04/GERALD
CREATE VIEW KV_INSCRIPCION AS
SELECT P.NOMBRE NOMBRE_USER ,P.ID_PERSONA ID_PERSONA,I.ESTADO ESTADO_ACTUAL
FROM PERSONA P JOIN INSCRIPCION I ON P.ID_PERSONA=I.KFK_PER
WHERE I.ESTADO=0;

--Consultando vista
SELECT * FROM KV_INSCRIPCION;