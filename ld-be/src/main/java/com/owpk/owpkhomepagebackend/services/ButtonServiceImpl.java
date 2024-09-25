package com.owpk.owpkhomepagebackend.services;

import com.owpk.owpkhomepagebackend.entities.Button;
import com.owpk.owpkhomepagebackend.repositories.ButtonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ButtonServiceImpl implements ButtonService {
    private final ButtonRepository buttonRepository;
    @Override
    public List<Button> getAll() {
        return buttonRepository.getAll();
    }

    @Override
    public Button saveOrUpdate(Button button) {
        return buttonRepository.saveOrUpdate(button);
    }

    @Override
    public Boolean delete(String id) {
        return buttonRepository.delete(id);
    }
}
