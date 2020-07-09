package com.foodshare.springboot.backend.mvc.models.services;

import java.util.List;

import com.foodshare.springboot.backend.mvc.models.entity.Platos;


public interface IPlatosService {
	
	public List<Platos> findAll();	

	public Platos save(Platos plato);

	public Platos findById(Long id);

	public void delete(Long id);

}
