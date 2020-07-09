package com.foodshare.springboot.backend.mvc.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.foodshare.springboot.backend.mvc.models.entity.Platos;

// interfaz que hereda de CRUD repository (y da acceso a funciones save, find, delete...) 
public interface IPlatosDAO extends CrudRepository<Platos, Long> {
	
}
