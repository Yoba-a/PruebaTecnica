package com.chn.chnprestamos.controllers;

import com.chn.chnprestamos.models.SolicitudPrestamo;
import com.chn.chnprestamos.services.SolicitudPrestamoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/solicitud-prestamo")
public class SolicitudPrestamoController {

    @Autowired
    private SolicitudPrestamoService solicitudPrestamoService;


    @GetMapping
    public List<SolicitudPrestamo> getAllSolicitudPrestamo(){
        return solicitudPrestamoService.findAll();
    }
}
