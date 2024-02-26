package com.chn.chnprestamos.services;

import com.chn.chnprestamos.models.Colaborador;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.chn.chnprestamos.repository.ColaboradorRepository;

import java.util.List;

@Service
@Setter
@Getter
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    public List<Colaborador> findAll(){
        return colaboradorRepository.findAll();
    }

    public Colaborador save(Colaborador colaborador) {
        return colaboradorRepository.save(colaborador);
    }

    public void deleteById(String id) {
        colaboradorRepository.deleteById(id);
    }

    public Colaborador findById(String id) {
        return colaboradorRepository.findById(id).orElse(null);
    }

}
