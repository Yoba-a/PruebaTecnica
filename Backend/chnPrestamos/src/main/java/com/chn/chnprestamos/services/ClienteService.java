package com.chn.chnprestamos.services;

import com.chn.chnprestamos.models.Cliente;
import com.chn.chnprestamos.models.Usuario;
import com.chn.chnprestamos.repository.ClienteRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Setter
@Getter
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private UsuarioService usuarioService;

    public List<Cliente> findAll(){
        return clienteRepository.findAll();
    }

    public Cliente findById(String id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public void deleteById(String id) {
        clienteRepository.deleteById(id);
    }

}
