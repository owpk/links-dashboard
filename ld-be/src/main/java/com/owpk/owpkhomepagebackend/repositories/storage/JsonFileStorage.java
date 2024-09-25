package com.owpk.owpkhomepagebackend.repositories.storage;

import java.nio.file.Path;

public interface JsonFileStorage {
    Path getJsonFile();

    byte[] getContent();

    void updateJsonFile(byte[] data);
}
