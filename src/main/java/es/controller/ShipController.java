package es.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.model.Ship;
import es.repository.ShipRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger; 
import org.slf4j.LoggerFactory;

@RestController
public class ShipController{
    private final ShipRepository shipRepository;
    public static final Logger log = LoggerFactory.getLogger(ShipController.class);
    public ShipController(ShipRepository t) {
        this.shipRepository = t;
    }

    @GetMapping("/ships")
    List<Ship> readAll() {
      return (List<Ship>) shipRepository.findAll();
    }

    @PostMapping("/ships")
    ResponseEntity<Ship> create(@RequestBody Ship newShip) throws URISyntaxException {
      Ship result = shipRepository.save(newShip);
      return ResponseEntity.created(new URI("/ships/" + result.getEmail())).body(result);
    }

    @GetMapping("/ships/{id}")
    ResponseEntity<Ship> read(@PathVariable String id) {
      return shipRepository.findById(id).map(Ship ->
         ResponseEntity.ok().body(Ship)
      ).orElse(new ResponseEntity<Ship>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/ships/{id}")
    ResponseEntity<Ship> update(@RequestBody Ship newShip, @PathVariable String id) {
      return shipRepository.findById(id).map(Ship -> {
        Ship.setStatus(newShip.getCompany());
        Ship.setPedido(newShip.getPedido());
        Ship.setStatus(newShip.getStatus());
        shipRepository.save(Ship);
        return ResponseEntity.ok().body(Ship);
      }).orElse(new ResponseEntity<Ship>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("ships/{id}")
    ResponseEntity<Ship> delete(@PathVariable String id) {
      shipRepository.deleteById(id);
      return ResponseEntity.ok().body(null);
    }

}
