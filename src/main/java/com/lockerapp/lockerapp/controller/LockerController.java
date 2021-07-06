package com.lockerapp.lockerapp.controller;


import com.lockerapp.lockerapp.entity.Locker;
import com.lockerapp.lockerapp.repository.LockerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/locker")
public class LockerController {

    @Autowired
    private LockerRepository LockerRepository;

    /* List All Lockers */
    @CrossOrigin
    @GetMapping("/listAll")
    public List<Locker> listAllLocker(){
        List<Locker> locker = LockerRepository.findAll();
        return locker;
    }

    /* Add Locker */
    @CrossOrigin
    @PostMapping("/addlocker")
    public Locker addlocker(@Valid @RequestBody Locker locker){
        Locker newLocker = LockerRepository.save(locker);
        return newLocker;
    }

    /* Get Locker By Id*/
    @CrossOrigin
    @GetMapping("/getlockerbyid/{id}")
    public Object getLockerById(@PathVariable long id){
        Locker locker =  LockerRepository.findById(id);
        /*if (locker == null){
            return ("{message: not found}");
        }*/
//        System.out.println("locker = "+locker);
        return locker;
    }

    /* Get Locker By City*/
    @CrossOrigin
    @GetMapping("/getlockerbycity/{city}")
    public List<Locker> getLockerByCity(@PathVariable String city){
        List<Locker> locker = LockerRepository.findByCity(city);
        return locker;
    }

    /* Get Locker By State*/
    @CrossOrigin
    @GetMapping("/getlockerbystate/{state}")
    public List<Locker>  getLockerByState(@PathVariable String state){
        List<Locker>  locker = LockerRepository.findByState(state);
        return locker;
    }
}
