package com.example.demo.models;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class UsuarioModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String nombreUsuario;
    private String email;
    private String password;
    private String nombres;
    private String apellidos;
    private String genero;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "usuario_libros",
        joinColumns = @JoinColumn(name = "usuario_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "libro_id", referencedColumnName = "id"))
    private Set<LibroModel> libros;

    public UsuarioModel(String nombre, LibroModel... libros) {
        this.nombreUsuario = nombre;
        this.libros = Stream.of(libros).collect(Collectors.toSet());
        this.libros.forEach(x -> x.getUsuarios().add(this));
    }

    public Set<LibroModel> getLibros() {
        return libros;
    }
    public void setLibros(Set<LibroModel> libros) {
        this.libros = libros;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombreUsuario() {
        return nombreUsuario;
    }
    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getNombres() {
        return nombres;
    }
    public void setNombres(String nombres) {
        this.nombres = nombres;
    }
    public String getApellidos() {
        return apellidos;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
}