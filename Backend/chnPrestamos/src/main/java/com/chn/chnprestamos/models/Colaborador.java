package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "colaborador", catalog = "", schema = "dbo")
public class Colaborador {


        @Id
        private String noIdentificacion;

        @OneToOne
        @JoinColumn(name = "usuarioID", nullable = false)
        private Usuario usuario;

        @Column(name = "nombre")
        private String nombre;

        @Column(name = "apellido")
        private String apellido;


        @Column(name = "dependencia")
        private String dependencia;

        @Column(name = "correoElectronico")
        private String correoElectronico;

        @Column(name = "telefono")
        private String telefono;


}
