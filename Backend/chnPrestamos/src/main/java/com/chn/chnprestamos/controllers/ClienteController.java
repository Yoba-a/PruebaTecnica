package com.chn.chnprestamos.controllers;

import com.chn.chnprestamos.models.Cliente;
import com.chn.chnprestamos.services.ClienteService;
import com.chn.chnprestamos.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Cliente> getAllClientes(){
        return clienteService.findAll();
    }

    @PostMapping
    public Cliente saveCliente(@RequestBody  Cliente cliente){
        return clienteService.save(cliente);
    }

    @PutMapping("/updateCliente")
    public Cliente updateCliente(@RequestBody Cliente cliente){
        return clienteService.save(cliente);
    }

    @DeleteMapping("/deleteCliente/{id}")
    public void deleteCliente(@PathVariable String id){
        Cliente cliente = clienteService.findById(id);
        clienteService.deleteById(id);

    }
}
