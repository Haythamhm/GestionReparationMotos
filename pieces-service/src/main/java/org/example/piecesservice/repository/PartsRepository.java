package org.example.piecesservice.repository;

import org.example.piecesservice.entity.Part;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartsRepository extends JpaRepository<Part, Long> {
}
