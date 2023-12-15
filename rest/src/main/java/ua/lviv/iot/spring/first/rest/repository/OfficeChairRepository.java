package ua.lviv.iot.spring.first.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.lviv.iot.spring.first.rest.model.OfficeChair;


public interface OfficeChairRepository extends JpaRepository <OfficeChair, Long> {

}
