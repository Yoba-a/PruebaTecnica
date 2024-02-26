package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "usuario", catalog = "", schema = "dbo")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer usuarioID;

    @Column(name = "nombreUsuario")
    private String nombreUsuario;

    @Column(name = "estadoUsuario")
    private char estadoUsuario;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "rolID", nullable = false)
    private RolUsuario rol;
}
