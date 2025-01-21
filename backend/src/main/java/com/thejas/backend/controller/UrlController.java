package com.thejas.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.thejas.backend.service.UrlService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class UrlController {
    @Autowired
    private UrlService urlService;

    @GetMapping("path")
    public String getMethodName(@RequestParam String param) {
        return  "Hello, " ;
    }
    

    @PostMapping("/shorten")
    public String shortenUrl(@RequestBody String originalUrl) {
        return urlService.shortenUrl(originalUrl);
    }

    @GetMapping("/{shortUrl}")
    public String getOriginalUrl(@PathVariable String shortUrl) {
        return urlService.getOriginalUrl(shortUrl);
    }
}
