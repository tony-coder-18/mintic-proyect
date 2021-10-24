package com.example.demo.models;
import java.util.HashSet;  
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name="libro")
public class LibroModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    private String nombre;
    private String descripcion;
    private String autor;
    private String anioPublicacion;
    private String genero;
    private String rutaImagen;

    @ManyToMany(mappedBy = "libros")
    private Set<UsuarioModel> usuarios = new HashSet<>();
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getAnioPublicacion() {
        return anioPublicacion;
    }
    public void setAnioPublicacion(String anioPublicacion) {
        this.anioPublicacion = anioPublicacion;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
    public String getRutaImagen() {
        return rutaImagen;
    }
    public void setRutaImagen(String rutaImagen) {
        this.rutaImagen = rutaImagen;
    }
    public Set<UsuarioModel> getUsuarios() {
        return usuarios;
    }
    public void setUsuarios(Set<UsuarioModel> usuarios) {
        this.usuarios = usuarios;
    }

}
