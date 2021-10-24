package com.example.demo.controllers;
import java.util.ArrayList;
import java.util.Optional;

import com.example.demo.models.LibroModel;
import com.example.demo.Services.LibroServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
@RequestMapping("/libro")
public class LibroController {
    @Autowired
    LibroServices libroServices;

    @GetMapping()
    public ArrayList<LibroModel> obtenerLibros(){
        return libroServices.obtenerLibros();
    }

    @PostMapping
    public LibroModel guardarLibro (@RequestBody LibroModel libro){
        return this.libroServices.guardarLibro(libro);
    }

    @GetMapping(path = "/{id}")
    public Optional<LibroModel> obtenerLibroPorId(@PathVariable("id") Long id){
        return this.libroServices.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<LibroModel> obtenerLibroPorNombre(@RequestParam("nombre") String email){
        return this.libroServices.obtenerPorNombre(email);
    }
    
    @DeleteMapping( path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.libroServices.eliminarLibro(id);
        if (ok){
            return "se elimino el libro con id: "+id;
        }else{
            return "No se elimino el libro con id: "+ id;
        }
    }

}
