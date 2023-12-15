package ua.lviv.iot.spring.first.rest.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.spring.first.rest.model.OfficeChair;
import ua.lviv.iot.spring.first.rest.repository.OfficeChairRepository;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chairs")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class OfficeChairController {

    private OfficeChairRepository repository;

    @Autowired
    public OfficeChairController(OfficeChairRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<OfficeChair> getChairs() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OfficeChair> getChair(@PathVariable Long id){
        Optional<OfficeChair> chair = repository.findById(id);
        return chair.map(officeChair -> new ResponseEntity<>(officeChair, HttpStatus.OK)).orElseGet(
                () ->new ResponseEntity<>(HttpStatus.NOT_FOUND)
        );
    }

    @PostMapping
    public ResponseEntity<OfficeChair> createOfficeChair(@RequestBody OfficeChair officeChair)  {
        OfficeChair save = repository.save(officeChair);
        return new ResponseEntity<>(save, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<OfficeChair> deleteChair(@PathVariable("id") Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<OfficeChair> updateChair(@PathVariable Long id, @RequestBody OfficeChair updatedChair) {
        if (repository.existsById(id)) {
            updatedChair.setId(id);
            OfficeChair savedChair = repository.save(updatedChair);
            return new ResponseEntity<>(savedChair, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}