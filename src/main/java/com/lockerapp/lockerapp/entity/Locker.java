package com.lockerapp.lockerapp.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "locker")
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Locker {
    @Id
    @Column(name = "id", nullable = false)
    @SequenceGenerator(name = "locker_seq", sequenceName = "locker_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "locker_seq")
    private long id;

    private String name;
    private String city;
    private String state;
    private String size;
    private Long height;
    private Long width;
    private Long depth;
    private Long price;

    @Column(name = "quantity_available", nullable = false)
    private Long quantity;

    private float lng;
    private float lat;
}
