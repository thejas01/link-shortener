package com.thejas.backend.utility;


import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class KeyGenerator {
    private static final String CHAR_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int KEY_LENGTH = 6;

    public String generateKey() {
        Random random = new Random();
        StringBuilder key = new StringBuilder(KEY_LENGTH);
        for (int i = 0; i < KEY_LENGTH; i++) {
            key.append(CHAR_SET.charAt(random.nextInt(CHAR_SET.length())));
        }
        return key.toString();
    }
}