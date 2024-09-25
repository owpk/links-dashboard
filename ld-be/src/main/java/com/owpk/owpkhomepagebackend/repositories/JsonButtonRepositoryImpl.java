package com.owpk.owpkhomepagebackend.repositories;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.owpk.owpkhomepagebackend.entities.Button;
import com.owpk.owpkhomepagebackend.repositories.storage.ButtonsJsonFileStorage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class JsonButtonRepositoryImpl implements ButtonRepository {
    private final ButtonsJsonFileStorage jsonFileStorage;
    private final ObjectMapper mapper;

    @Override
    public List<Button> getAll() {
        try {
            var data = jsonFileStorage.getContent();
            if (data == null || data.length == 0)
                return Collections.emptyList();
            return mapper.readValue(data,
                    new TypeReference<>() {
                    });
        } catch (IOException e) {
            return Collections.emptyList();
        }
    }

    @Override
    public Button saveOrUpdate(Button button) {
        var allButtons = mapAll();
        if (button.getId() != null) {
            var targetButton = allButtons.computeIfPresent(button.getId(), (k, v) -> button);
            if (targetButton == null)
                allButtons.put(button.getId(), button);
        } else {
            button.setId(UUID.randomUUID().toString());
            allButtons.put(button.getId(), button);
        }
        rewriteData(allButtons.values());
        return button;
    }

    @Override
    public Boolean delete(String id) {
        var mapped = mapAll();
        var result = mapped.remove(id);
        rewriteData(mapped.values());
        return result != null;
    }

    private Map<String, Button> mapAll() {
        return getAll().stream().collect(Collectors.toMap(Button::getId, Function.identity()));
    }

    private void rewriteData(Collection<Button> values) {
        try {
            var data = mapper.writerWithDefaultPrettyPrinter()
                    .writeValueAsBytes(values);
            jsonFileStorage.updateJsonFile(data);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
