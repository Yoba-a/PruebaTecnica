package com.chn.chnprestamos.controllers;

import com.chn.chnprestamos.models.Colaborador;
import com.chn.chnprestamos.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/colaboradores")
public class ColaboradorController {

    @Autowired
    private ColaboradorService colaboradorService;

    @GetMapping
    public List<Colaborador> getAllColaboradores(){
        return colaboradorService.findAll();
    }
}
