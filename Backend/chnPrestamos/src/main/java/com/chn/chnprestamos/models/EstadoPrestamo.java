package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "estadoPrestamo", catalog = "", schema = "dbo")
public class EstadoPrestamo {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer idEstadoPrestamo;

    @Column(name = "estadoPrestamo")
    private String estadoPrestamo;



}
