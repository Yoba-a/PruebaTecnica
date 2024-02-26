CREATE DATABASE chnPrestamos;

USE chnPrestamos;

create table dbo.estadoPrestamo
(
    idEstadoPrestamo int identity
        constraint estadoPrestamo_pk
            primary key,
    estadoPrestamo   varchar(50) not null
)
go

create table dbo.estadoSolicitud
(
    idEstado        int identity
        constraint estadoSolicitud_pk
            primary key,
    estadoSolicitud varchar(50) not null
)
go

create table dbo.rolUsuario
(
    rolID     int identity
        constraint rolUsuario_pk
            primary key,
    nombreRol varchar(50) not null
)
go

create table dbo.tipoPago
(
    diTipoPago int         not null
        constraint tipoPago_pk
            primary key,
    tipoPago   varchar(50) not null
)
go

create table dbo.usuario
(
    usuarioID     int identity
        constraint usuario_pk
            primary key,
    nombreUsuario varchar(50) not null,
    estadoUsuario char        not null,
    rolID         int         not null
        constraint Usuario_RolUsuario_rolID_fk
            references dbo.rolUsuario,
    password      varchar(50) not null
)
go

create table dbo.SolicitudPrestamo
(
    solicitudID               int identity
        constraint solicitudPrestamo_pk
            primary key,
    usuarioID_Cliente         int      not null
        constraint FK_SolicitudPrestamo_Usuario
            references dbo.usuario
            on delete cascade
        constraint SolicitudPrestamo_Usuario_usuarioID_fk
            references dbo.usuario,
    montoSolicitado           float    not null,
    fechaSolicitud            datetime not null,
    fechaInicioPrestamo       datetime not null,
    fechaFinalPrestamo        datetime not null,
    tasaInteresSolicitada     float    not null,
    usuarioID_Colaborador     int      not null
        constraint SolicitudPrestamo_Usuario_usuarioID_fk_2
            references dbo.usuario,
    detalleResultadoSolicitud varchar(50),
    estadoSolicitud           int      not null
        constraint SolicitudPrestamo_estadoSolicitud_idEstado_fk
            references dbo.estadoSolicitud
)
go

create table dbo.cliente
(
    noIdenteificacion varchar(50)  not null,
    usuarioID         int          not null
        constraint cliente_Usuario_usuarioID_fk
            references dbo.usuario,
    nombre            varchar(50)  not null,
    apellido          varchar(50)  not null,
    fechaNacimiento   date         not null,
    direccion         varchar(100) not null,
    correoElectronico varchar(50)  not null,
    telefono          varchar(20)  not null
)
go

create unique index cliente_usuarioID_uindex
    on dbo.cliente (usuarioID)
go

create table dbo.colaborador
(
    usuarioID         int         not null
        constraint colaborador_Usuario_usuarioID_fk
            references dbo.usuario,
    nombre            varchar(50) not null,
    apellido          varchar(50) not null,
    dependencia       varchar(50) not null,
    correoElectronico varchar(50) not null,
    telefono          varchar(15) not null,
    noIdentificacion  varchar(50) not null
        constraint colaborador_pk
            primary key
)
go

create unique index colaborador_usuarioID_uindex
    on dbo.colaborador (usuarioID)
go

create table dbo.prestamo
(
    prestamoID         int identity
        constraint prestamo_pk
            primary key,
    solicitudID        int      not null
        constraint FK_prestamo_SolicitudPrestamo
            references dbo.SolicitudPrestamo
            on delete cascade
        constraint prestamo_SolicitudPrestamo_solicitudID_fk
            references dbo.SolicitudPrestamo,
    montoFinalAprobado float    not null,
    fechaInicio        datetime not null,
    fechafin           datetime not null,
    tasaDeInteres      float    not null,
    cuotaMensual       float    not null,
    interesMensual     float    not null,
    estadoPrestamo     int      not null
        constraint prestamo_estadoPrestamo_idEstadoPrestamo_fk
            references dbo.estadoPrestamo
)
go

create table dbo.pagoPrestamo
(
    idPagoPrestamo   int identity
        constraint pagoPrestamo_pk
            unique,
    montoPago        float    not null,
    fechaPago        datetime not null,
    tipoPago         int      not null
        constraint pagoPrestamo_TipoPago_diTipoPago_fk
            references dbo.tipoPago,
    saldoAntesPago   float    not null,
    saldoDespuesPago float    not null,
    idPrestamo       int      not null
        constraint pagoPrestamo_Prestamo_prestamoID_fk
            references dbo.prestamo
)
go

