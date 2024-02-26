package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "SolicitudPrestamo", catalog = "", schema = "dbo")
public class SolicitudPrestamo {

    @Id
    private Integer solicitudID;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "usuarioID_Cliente", nullable = false)
    private Usuario usuarioCliente;

    @Column(name = "montoSolicitado")
    private Double montoSolicitado;

    @Column(name = "fechaSolicitud")
    private LocalDate fechaSolicitud;

    @Column(name = "fechaInicioPrestamo")
    private LocalDate fechaInicioPrestamo;

    @Column(name = "tasaInteresSolicitada")
    private Double tasaInteresSolicitada;

    @ManyToOne
    @JoinColumn(name = "usuarioID_Colaborador", nullable = false)
    private Usuario usuarioColaborador;


    @Column(name = "detalleResultadoSolicitud")
    private String detalleResultadoSolicitud;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "estadoSolicitud", nullable = false)
    private EstadoSolicitud estadoSolicitud;


}
