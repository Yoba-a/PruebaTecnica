package com.chn.chnprestamos.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "prestamo", catalog = "", schema = "dbo")
public class Prestamo {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer prestamoID;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "solicitudID", nullable = false)
    private SolicitudPrestamo solicitudPrestamo;

    @Column(name = "montoFinalAprobado")
    private float montoFinalAprobado;

    @Column(name = "fechaInicio")
    private String fechaInicio;

    @Column(name = "fechafin")
    private String fechafin;

    @Column(name = "tasaDeInteres")
    private float tasaDeInteres;

    @Column(name = "cuotaMensual")
    private float cuotaMensual;

    @Column(name = "interesMensual")
    private float interesMensual;

    @ManyToOne
    @JoinColumn(name = "estadoPrestamo", nullable = false)
    private EstadoPrestamo estadoPrestamo;

}
