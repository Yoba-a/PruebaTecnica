package com.chn.chnprestamos.controllers;

import com.chn.chnprestamos.models.PagoPrestamo;
import com.chn.chnprestamos.services.PagoPrestamoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pago")
public class PagoController {

    @Autowired
    private PagoPrestamoService pagoPrestamoService;

    @GetMapping
    public List<PagoPrestamo> getAllPagoPrestamo(){
        return pagoPrestamoService.findAll();
    }
}
