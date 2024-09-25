package com.owpk.owpkhomepagebackend.controllers;

import com.owpk.owpkhomepagebackend.entities.Button;
import com.owpk.owpkhomepagebackend.services.ButtonService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hp-api/buttons")
@RequiredArgsConstructor
public class ButtonController {
    private final ButtonService buttonService;

    @GetMapping
    public List<Button> getAll() {
        return buttonService.getAll();
    }

    @PostMapping
    public Button saveOrUpdate(@RequestBody Button button) {
        return buttonService.saveOrUpdate(button);
    }

    @DeleteMapping
    public Boolean delete(@RequestParam String id) {
        return buttonService.delete(id);
    }

}
