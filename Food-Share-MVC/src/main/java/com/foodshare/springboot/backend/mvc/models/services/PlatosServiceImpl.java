package com.foodshare.springboot.backend.mvc.models.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodshare.springboot.backend.mvc.models.dao.IPlatosDAO;
import com.foodshare.springboot.backend.mvc.models.entity.Platos;


@Service
public class PlatosServiceImpl implements IPlatosService {

	@Autowired
	private IPlatosDAO platosDao;
	
	@Override
	public List<Platos> findAll() {
		return (List<Platos>) platosDao.findAll();
	}

	@Override
	@Transactional
	public Platos save(Platos plato) {
		return platosDao.save(plato);
	}


	@Override
	public Platos findById(Long id) {
		return platosDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		platosDao.deleteById(id);
	}

	

}
