package com.owpk.owpkhomepagebackend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Button {
    String id;
    String name;
    String url;
    @JsonProperty("image_link")
    String imageLink;
}
