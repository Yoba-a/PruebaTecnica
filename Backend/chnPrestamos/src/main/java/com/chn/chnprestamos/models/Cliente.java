package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "cliente", catalog = "", schema = "dbo")
public class Cliente {

    @Id
    private String noIdenteificacion;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "usuarioID", nullable = false)
    private Usuario usuario;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "fechaNacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "correoElectronico")
    private String correoElectronico;

    @Column(name = "telefono")
    private String telefono;

}
