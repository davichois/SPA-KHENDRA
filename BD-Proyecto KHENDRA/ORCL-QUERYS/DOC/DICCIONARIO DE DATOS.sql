
--COLUMNAS,INDICES,CONSTRAINS, LLAVES FORANEAS, COMENTARIOS
SELECT * FROM USER_TABLES;

---TABLA CLASE

----COMENTARIO TABLA
COMMENT ON TABLE CLASE IS 'En la tabla “CLASES” se encontraran los datos de la clase y los archivos determinados.';

----COMENTARIO COLUMNA
COMMENT ON COLUMN CLASE.ARCHIVO IS 'En esta columna ira la URL del video de cada clase, el cual sera jalado de YouTube';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='CLASE';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='CLASE'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='CLASE';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='CLASE';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='CLASE'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='CLASE'
and a.constraint_type='R';

---TABLA CURSO

----COMENTARIO TABLA
COMMENT ON TABLE CURSO IS 'En la tabla “CURSO” se encontraran datos del curso que el administrador colocara al crear un nuevo curso.';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='CURSO';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='CURSO'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='CURSO';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='CURSO';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='CURSO'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='CURSO'
and a.constraint_type='R';

---TABLA DOCENTE

----COMENTARIO TABLA
COMMENT ON TABLE DOCENTE IS 'En la tabla “DOCENTE” se encontraran datos relacionados al docente.';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='DOCENTE';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='DOCENTE'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='DOCENTE';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='DOCENTE';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='DOCENTE'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='DOCENTE'
and a.constraint_type='R';

---TABLA ESPECIALIZACION

----COMENTARIO TABLA
COMMENT ON TABLE ESPECIALIZACION IS 'En la tabla “ESPECIALIZACION” se encontraran todas las especializaciones de cada docente que dictara una clase.';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='ESPECIALIZACION';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='ESPECIALIZACION'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='ESPECIALIZACION';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='ESPECIALIZACION';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='ESPECIALIZACION'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5/NO HAY
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='ESPECIALIZACION'
and a.constraint_type='R';

---TABLA INSCRIPCION

----COMENTARIO TABLA
COMMENT ON TABLE INSCRIPCION IS 'Esta es una tabla asociativa que une a las tablas USUARIO y CURSO.';

----COMENTARIO A COLUMNA
COMMENT ON COLUMN INSCRIPCION.ESTADO IS 'Esta columna especifica si es 1 = esta activa, 0 = no esta activa';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='INSCRIPCION';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='INSCRIPCION'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='INSCRIPCION';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='INSCRIPCION';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='INSCRIPCION'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='INSCRIPCION'
and a.constraint_type='R';

---TABLA INSCRIPCIONCLASE

----COMENTARIO TABLA
COMMENT ON TABLE INSCRIPCIONCLASE IS 'Esta es una tabla ayudará a llevar el control entre las clase de los cursos que el usuario haya tomado.';

----COMENTARIO A COLUMNA
COMMENT ON COLUMN INSCRIPCIONCLASE.ESTADO IS 'Esta columna especifica si es 1 = esta activa, 0 = no esta activa';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='INSCRIPCIONCLASE';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='INSCRIPCIONCLASE'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='INSCRIPCIONCLASE';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='INSCRIPCIONCLASE';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='INSCRIPCIONCLASE'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='INSCRIPCIONCLASE'
and a.constraint_type='R';

---TABLA MODULO

----COMENTARIO TABLA
COMMENT ON TABLE MODULO IS 'Esta es una tabla se podra llevar un orden de las clases de cada curso.';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='MODULO';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='MODULO'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='MODULO';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='MODULO';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='MODULO'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='MODULO'
and a.constraint_type='R';

---TABLA PERSONA

----COMENTARIO TABLA
COMMENT ON TABLE PERSONA IS 'Esta es la tabla padre de USUARIO y DOCENTE.';
COMMENT ON COLUMN PERSONA.ESTADO IS 'Esta columna especifica si es 1 = esta activa, 0 = no esta activa';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='PERSONA';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='PERSONA'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='PERSONA';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='PERSONA';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='PERSONA'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5/NO HAY
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='PERSONA'
and a.constraint_type='R';

---TABLA USUARIO

----COMENTARIO TABLA
COMMENT ON TABLE USUARIO IS 'Esta es la tabla encontraremos todos los usuarios del sistema sea o no administrador.';
COMMENT ON COLUMN USUARIO.ADMIN IS 'Esta columna especifica si es 1 = admin, 0 = no admin';

----1
SELECT A.OBJECT_NAME,A.CREATED, B.COMMENTS, ( SELECT COUNT(x.column_name) FROM USER_tab_columns X 
                                              WHERE x.table_name=A.OBJECT_NAME) CANT_COLUM
FROM user_objects A, USER_TAB_COMMENTS B
WHERE A.OBJECT_NAME=b.table_name
AND A.object_type=B.TABLE_TYPE
AND A.object_type='TABLE'
AND A.OBJECT_NAME='USUARIO';

----2
SELECT rownum, a.column_name,decode(x.CONSTRAINT_TYPE,'P','P',' ') PK,
decode(x.CONSTRAINT_TYPE,'R','F',' ') FK,
a.data_type TIPO_DE_DATO,
(case when a.data_type='VARCHAR2' then '('||to_char(a.data_length)||')' 
else '('||to_char(a.data_precision||','||a.data_scale||')') end )  TAMAÑO,
a.nullable NULO, xx.comments
FROM USER_tab_columns A left join USER_col_COMMENTS XX on a.column_name=XX.column_name AND a.table_name=XX.table_name
LEFT JOIN (select b.table_name, b.column_name, c.constraint_type 
from USER_CONS_COLUMNS b join USER_CONSTRAINTS c on 
b.table_name=C.TABLE_NAME 
AND b.constraint_name=C.CONSTRAINT_NAME
where b.table_name='USUARIO'
and c.constraint_type in ('R','P')) x ON a.table_name=x.table_name AND a.column_name=x.column_name
WHERE A.TABLE_NAME='USUARIO';

----3
SELECT a.index_name, b.column_name, a.index_type ||' '|| a.uniqueness tipo FROM USER_INDEXES A
JOIN USER_ind_columns B ON a.table_name=b.table_name AND a.index_name=b.index_name
where a.table_name='USUARIO';

----4
select A.CONSTRAINT_TYPE, A.CONSTRAINT_NAME , b.column_name
from user_constraints  A JOIN USER_CONS_COLUMNS B ON a.table_name=b.table_name AND a.constraint_name=b.constraint_name
where A.table_name='USUARIO'
AND A.CONSTRAINT_TYPE NOT IN ('R','P','U') ;

----5
select a.table_name||'.'||a.constraint_name nombre, b.table_name referencia_a ,d.nullable, c.column_name
from USER_CONSTRAINTS a 
join USER_CONSTRAINTS b on a.r_constraint_name=b.constraint_name
join USER_CONS_COLUMNS c on a.constraint_name=c.constraint_name
join USER_tab_columns d on c.column_name=d.column_name and c.table_name=d.table_name
where a.table_name='USUARIO'
and a.constraint_type='R';


