package com.chn.chnprestamos.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/")
    public Map<String, String> inicio(){
        Map<String,String> response = new HashMap<>();
        response.put("Mensaje", "Hola esta es una prueba tecnica");
        response.put("autor", "Sergio Castro");
        return response;
    }
}
