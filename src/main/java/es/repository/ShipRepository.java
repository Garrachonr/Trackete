package es.repository;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import es.model.Ship;

public interface ShipRepository extends CrudRepository<Ship, String>{
    List<Ship> findByCompany(String company);
    List<Ship> findByEmail(String email);
}
