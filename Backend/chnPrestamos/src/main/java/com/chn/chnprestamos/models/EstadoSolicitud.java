package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "estadoSolicitud", catalog = "", schema = "dbo")
public class EstadoSolicitud {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Integer idEstado;

    @Column(name = "estadoSolicitud")
    private String estadoSolicitud;
}
