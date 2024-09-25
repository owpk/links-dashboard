package com.owpk.owpkhomepagebackend;

import com.owpk.owpkhomepagebackend.repositories.storage.ButtonsJsonFileStorage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    @Value("${file_storage.path}")
    private String fileStoragePath;

    @Bean
    public ButtonsJsonFileStorage jsonFileStorage() {
        return new ButtonsJsonFileStorage(fileStoragePath);
    }

}
