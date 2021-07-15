CREATE TABLE clase (
    id_clase           NUMBER(5) NOT NULL,
    nombre_clase       VARCHAR2(40 BYTE) NOT NULL,
    descripcion_clase  VARCHAR2(150 BYTE),
    archivo            VARCHAR2(150 BYTE) NOT NULL,
    kfk_mod            NUMBER(8) NOT NULL
);

ALTER TABLE clase ADD CONSTRAINT clase_pk PRIMARY KEY ( id_clase );

CREATE TABLE curso (
    id_curso           NUMBER(6) NOT NULL,
    nombre_curso       VARCHAR2(50 BYTE) NOT NULL,
    description_curso  VARCHAR2(150 BYTE) NOT NULL,
    kfk_doce           NUMBER(5) NOT NULL
);

ALTER TABLE curso ADD CONSTRAINT curso_pk PRIMARY KEY ( id_curso );

CREATE TABLE docente (
    kfk_espe  NUMBER(5) NOT NULL,
    kfk_per   NUMBER(5) NOT NULL,
    sueldo    NUMBER(8)
);

ALTER TABLE docente ADD CONSTRAINT docente_pk PRIMARY KEY ( kfk_per );

CREATE TABLE especializacion (
    id_especializacion  NUMBER(5) NOT NULL,
    especializacion     VARCHAR2(45 BYTE) NOT NULL
);

ALTER TABLE especializacion ADD CONSTRAINT especializacion_pk PRIMARY KEY ( id_especializacion );

CREATE TABLE inscripcion (
    id_inscription  NUMBER(7) NOT NULL,
    fecha           DATE NOT NULL,
    estado          CHAR(1 CHAR) NOT NULL,
    valoracion      NUMBER(1),
    kfk_per         NUMBER(5) NOT NULL,
    kfk_cur         NUMBER(6) NOT NULL
);

ALTER TABLE inscripcion ADD CONSTRAINT inscripcion_pk PRIMARY KEY ( id_inscription );

CREATE TABLE inscripcionclase (
    id_ic      NUMBER(6) NOT NULL,
    estado     CHAR(1 CHAR) NOT NULL,
    kfk_ins    NUMBER(7) NOT NULL,
    kfk_class  NUMBER(5) NOT NULL
);

ALTER TABLE inscripcionclase ADD CONSTRAINT inscripcionclase_pk PRIMARY KEY ( id_ic );

CREATE TABLE modulo (
    id_modulo      NUMBER(8) NOT NULL,
    nombre_modulo  VARCHAR2(50 BYTE) NOT NULL,
    kfk_cur        NUMBER(6) NOT NULL
);

ALTER TABLE modulo ADD CONSTRAINT modulo_pk PRIMARY KEY ( id_modulo );

CREATE TABLE persona (
    id_persona  NUMBER(5) NOT NULL,
    nombre      VARCHAR2(15 BYTE) NOT NULL,
    apellido    VARCHAR2(15 BYTE) NOT NULL,
    dni         CHAR(8 CHAR) NOT NULL,
    correo      VARCHAR2(30 BYTE),
    contraseña  VARCHAR2(20 BYTE) NOT NULL,
    edad        DATE NOT NULL,
    sexo        CHAR(1 CHAR) NOT NULL,
    estado      CHAR(1 CHAR) NOT NULL
);

ALTER TABLE persona ADD CONSTRAINT persona_pk PRIMARY KEY ( id_persona );

CREATE TABLE usuario (
    admin    CHAR(1 CHAR) NOT NULL,
    kfk_per  NUMBER(5) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( kfk_per );

ALTER TABLE clase
    ADD CONSTRAINT clase_modulo_fk FOREIGN KEY ( kfk_mod )
        REFERENCES modulo ( id_modulo );

ALTER TABLE curso
    ADD CONSTRAINT curso_docente_fk FOREIGN KEY ( kfk_doce )
        REFERENCES docente ( kfk_per );

ALTER TABLE docente
    ADD CONSTRAINT docente_especializacion_fk FOREIGN KEY ( kfk_espe )
        REFERENCES especializacion ( id_especializacion );

ALTER TABLE docente
    ADD CONSTRAINT docente_persona_fk FOREIGN KEY ( kfk_per )
        REFERENCES persona ( id_persona );

ALTER TABLE inscripcion
    ADD CONSTRAINT inscripcion_curso_fk FOREIGN KEY ( kfk_cur )
        REFERENCES curso ( id_curso );

ALTER TABLE inscripcion
    ADD CONSTRAINT inscripcion_persona_fk FOREIGN KEY ( kfk_per )
        REFERENCES persona ( id_persona );

ALTER TABLE inscripcionclase
    ADD CONSTRAINT inscripcionclase_clase_fk FOREIGN KEY ( kfk_class )
        REFERENCES clase ( id_clase );

--  ERROR: FK name length exceeds maximum allowed length(30) 
ALTER TABLE inscripcionclase
    ADD CONSTRAINT inscripcionclase_inscripcion_fk FOREIGN KEY ( kfk_ins )
        REFERENCES inscripcion ( id_inscription );

ALTER TABLE modulo
    ADD CONSTRAINT modulo_curso_fk FOREIGN KEY ( kfk_cur )
        REFERENCES curso ( id_curso );

ALTER TABLE usuario
    ADD CONSTRAINT usuario_persona_fk FOREIGN KEY ( kfk_per )
        REFERENCES persona ( id_persona );

