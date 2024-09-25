package com.owpk.owpkhomepagebackend.services;

import com.owpk.owpkhomepagebackend.entities.Button;

import java.util.List;

public interface ButtonService {
    List<Button> getAll();
    Button saveOrUpdate(Button button);
    Boolean delete(String id);
}
