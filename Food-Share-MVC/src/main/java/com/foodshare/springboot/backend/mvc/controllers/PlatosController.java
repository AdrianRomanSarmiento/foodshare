package com.foodshare.springboot.backend.mvc.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.foodshare.springboot.backend.mvc.models.entity.Platos;
import com.foodshare.springboot.backend.mvc.models.services.IPlatosService;

@CrossOrigin(origins = { "http://localhost:4200" })
@RestController
@RequestMapping("/api")

public class PlatosController {

	@Autowired
	private IPlatosService platosService;

	// Request de GET (obtiene todos los platos)
	@GetMapping("/platos")
	public ResponseEntity<?> index() {
		List<Platos> platosList = null;
		Map<String, Object> response = new HashMap();
		try {
			platosList = platosService.findAll();
		} catch (DataAccessException e) { // Base de datos inaccesible
			response.put("mensaje", "Error insertar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (platosList == null || platosList.isEmpty()) {
			response.put("mensaje", "No existen platos");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		response.put("mensaje", "Se han obtenido los datos correctamente");
		response.put("plato", platosList);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

	// Request de POST (inserta un plato)
	@PostMapping("/platos")
	public ResponseEntity<?> create(@Valid @RequestBody Platos plato, BindingResult result) {
		Platos platoNew = null;
		Map<String, Object> response = new HashMap();

		if (result.hasErrors()) {
			List<String> errores = result.getFieldErrors().stream()
					.map(e -> "El campo: " + e.getField() + " " + e.getDefaultMessage()).collect(Collectors.toList());
			response.put("errores", errores);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}

		try {
			platoNew = platosService.save(plato);
		} catch (DataAccessException e) { // Base de datos inaccesible
			response.put("mensaje", "Error insertar en la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		response.put("mensaje", "El plato se insert� correctamente");
		response.put("plato", platoNew);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
	}

	// Request de GET, obtiene el plato del id que se le pase
	@GetMapping("/platos/{id}")
	public ResponseEntity<?> index(@PathVariable Long id) { // PathVariable: el id viene en la ruta
		Platos plato = null;
		Map<String, Object> response = new HashMap();
		try {
			plato = platosService.findById(id); // si va bien, devolver un objeto tipo Platos
		} catch (DataAccessException e) { // Base de datos inaccesible
			response.put("mensaje", "Error al acceder a la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		if (plato == null) {
			response.put("mensaje", "No existe un plato con el ID indicado");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Platos>(plato, HttpStatus.OK);
	}

	// Request de DELETE, borra un plato
	@DeleteMapping("/platos/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		Platos platoBorrar = null;
		Map<String, Object> response = new HashMap<>();
		try {
			platoBorrar = platosService.findById(id);
		} catch (DataAccessException e) { // Base de datos inaccesible
			response.put("mensaje", "Error al acceder a la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (platoBorrar == null) {
			response.put("mensaje", "No existe un plato con el ID indicado");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		platosService.delete(platoBorrar.getId());
		response.put("mensaje", "Plato eliminado con �xito");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

	// Request de PUT. Modifica los datos de un plato
	@PutMapping("/platos/{id}")
	public ResponseEntity<?> update(@Valid @RequestBody Platos plato, @PathVariable Long id, BindingResult result) {
		Platos platoModificar = null;
		Map<String, Object> response = new HashMap();

		if (result.hasErrors()) {
			List<String> errores = result.getFieldErrors().stream()
					.map(e -> "El campo: " + e.getField() + " " + e.getDefaultMessage()).collect(Collectors.toList());
			response.put("errores", errores);
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
		}

		try {
			platoModificar = platosService.findById(id);
		} catch (DataAccessException e) { // Base de datos inaccesible
			response.put("mensaje", "Error al acceder a la base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		if (platoModificar == null) {
			response.put("mensaje", "No existe un plato con el ID indicado");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		platoModificar.setNombre(plato.getNombre());
		platoModificar.setDescripcion(plato.getDescripcion());
		platoModificar.setImagen(plato.getImagen());
		platoModificar.setCreador(plato.getCreador());
		platoModificar.setHora(plato.getHora());
		platoModificar.setDireccion(plato.getDireccion());
		platoModificar.setLatitud(plato.getLatitud());
		platoModificar.setLongitud(plato.getLongitud());
		platosService.save(platoModificar);
		response.put("mensaje", "Plato editado con exito");
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}

}
