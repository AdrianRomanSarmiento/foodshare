package com.foodshare.springboot.backend.mvc.models.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

@Entity
@Table(name="platos")
public class Platos implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Size(min=3, max=60, message="El nombre debe tener entre 3 y 60 caracteres.")
	@Column(nullable=false)
	private String nombre;
	
	@Size(min=1, max=250, message="La descripción puede tener como máximo 250 caracteres.")
	@Column(nullable=false)
	private String descripcion;

	@Column(nullable=false, columnDefinition="TEXT")
	private String imagen;
	
	@Size(min=3, max=30, message="El nombre del creador debe tener entre 3 y 30 caracteres.")
	@Column(nullable=false)
	private String creador;
	
	@Size(max=5, message="Introduzca una hora en formato HH:mm como cadena")
	@Column(nullable=false)
	private String hora;
	
	@Size(min=5, max=255, message="La dirección debe tener al menos 5 caracteres.")
	@Column(nullable=false)
	private String direccion;

	@Column(nullable=false)
	private double latitud;

	@Column(nullable=false)
	private double longitud;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getCreador() {
		return creador;
	}
	public void setCreador(String creador) {
		this.creador = creador;
	}
	public String getHora() {
		return hora;
	}
	public void setHora(String hora) {
		this.hora = hora;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public double getLatitud() {
		return latitud;
	}
	public void setLatitud(double latitud) {
		this.latitud = latitud;
	}
	public double getLongitud() {
		return longitud;
	}
	public void setLongitud(double longitud) {
		this.longitud = longitud;
	}
	
	
	

}
