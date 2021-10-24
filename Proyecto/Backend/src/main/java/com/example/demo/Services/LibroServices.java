package com.example.demo.Services;
import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.LibroModel;
import com.example.demo.repositories.LibroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibroServices {
   @Autowired
   LibroRepository libroRepository; 

   public ArrayList<LibroModel> obtenerLibros(){
       return (ArrayList<LibroModel>) libroRepository.findAll();
   }

   public LibroModel guardarLibro(LibroModel usuario){
       return libroRepository.save(usuario);
   }

   public Optional<LibroModel> obtenerPorId(Long id){
       return libroRepository.findById(id);
   }

   public ArrayList<LibroModel> obtenerPorNombre(String nombre){
       return libroRepository.findByNombre(nombre);
   }

   public boolean eliminarLibro(Long id){
       try {
           libroRepository.deleteById(id);
           return true;
       } catch (Exception e) {
           return false;
       }
   }

}

