package com.lockerapp.lockerapp.repository;

import com.lockerapp.lockerapp.entity.Locker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LockerRepository extends JpaRepository<Locker, Long> {
    //find Lockers by id
    Locker findById(long id);

    public List<Locker> findByCity(String city);

    public List<Locker> findByState(String state);
}
