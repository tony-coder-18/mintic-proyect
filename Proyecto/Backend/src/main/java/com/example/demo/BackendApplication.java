package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		try {
			SpringApplication.run(BackendApplication.class, args);
		} catch (Throwable e) {
			e.printStackTrace(); 
		}
	}

}
