package com.chn.chnprestamos.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "pagoPrestamo", catalog = "", schema = "dbo")
public class PagoPrestamo {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer idPagoPrestamo;

    @Column(name = "montoPago")
    private float montoPago;

    @Column(name = "fechaPago")
    private String fechaPago;

    @ManyToOne
    @JoinColumn(name = "tipoPago", nullable = false)
    private TipoPago tipoPago;

    @Column(name = "saldoAntesPago")
    private float saldoAntesPago;

    @Column(name = "saldoDespuesPago")
    private float saldoDespuesPago;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idPrestamo", nullable = false)
    private Prestamo prestamo;
}
