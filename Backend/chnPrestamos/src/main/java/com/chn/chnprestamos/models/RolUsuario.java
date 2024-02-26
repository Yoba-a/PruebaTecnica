package com.chn.chnprestamos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;


@Entity
@Getter
@Setter
public class RolUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rolID;
    @Column(name = "nombreRol")
    private String nombreRol;


}
