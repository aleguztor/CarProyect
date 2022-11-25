package com.solera.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestMethod;
import com.solera.methods.ModifiedMaze;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST})
public class CarController {
	
	@GetMapping("/")
	public int[][] getArrayMap() {
		ModifiedMaze mz = new ModifiedMaze();
		int[][] sendArray = mz.modified();
		return sendArray;
	}

}
