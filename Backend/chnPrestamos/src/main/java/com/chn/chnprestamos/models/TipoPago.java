package com.chn.chnprestamos.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "tipoPago", catalog = "", schema = "dbo")
public class TipoPago {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer idTipoPago;


    @Column(name = "tipoPago")
    private String tipoPago;


}
