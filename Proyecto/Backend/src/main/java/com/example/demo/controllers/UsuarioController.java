package com.example.demo.controllers;
import java.util.*;
import com.example.demo.Services.UsuarioServices;
import com.example.demo.models.UsuarioModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioServices usuarioServices;

    @GetMapping()
    public ArrayList<UsuarioModel> obtenerUsuarios(){
        return usuarioServices.obtenerUsuario();
    }

    @PostMapping
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioServices.guardarUsuario(usuario);
    }

    @GetMapping(path = "/{id}")
    public Optional<UsuarioModel> obtenerUsuarioPorId(@PathVariable("id") Long id){
        return this.usuarioServices.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<UsuarioModel> obtenerUsuarioPorEmail(@RequestParam("email") String email){
        return this.usuarioServices.obtenerPorEmail(email);
    }
}