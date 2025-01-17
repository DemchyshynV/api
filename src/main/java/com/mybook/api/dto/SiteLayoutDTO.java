package com.mybook.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SiteLayoutDTO {
    private String avatar;
    private String name;
    private String surname;
    private boolean admin;
    private boolean massages;
    private boolean friends;
}
