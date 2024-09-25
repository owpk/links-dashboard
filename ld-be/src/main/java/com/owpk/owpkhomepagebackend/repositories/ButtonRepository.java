package com.owpk.owpkhomepagebackend.repositories;

import com.owpk.owpkhomepagebackend.entities.Button;

import java.util.List;

public interface ButtonRepository {
    List<Button> getAll();
    Button saveOrUpdate(Button button);

    Boolean delete(String id);
}
