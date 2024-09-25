package com.owpk.owpkhomepagebackend.repositories.storage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public abstract class AbstractJsonFileStorage implements JsonFileStorage {

    protected final Path jsonFile;

    public AbstractJsonFileStorage(String filePath) {
        var path = Path.of(filePath);
        if (!Files.exists(path)) {
            try {
                Files.createFile(path);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        jsonFile = path;
    }

    @Override
    public Path getJsonFile() {
        return jsonFile;
    }

    @Override
    public byte[] getContent() {
        try {
            return Files.readAllBytes(jsonFile);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void updateJsonFile(byte[] data) {
        try {
            Files.write(jsonFile, data, StandardOpenOption.TRUNCATE_EXISTING);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
