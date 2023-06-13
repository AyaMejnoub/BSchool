package com.example.demo.Service;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.tika.Tika;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class CourcesUploadService {
    
    private static final String UPLOAD_DIR = "/home/dead-code/Bureau/FullStack_Project/Files/";

    public void uploadFile(MultipartFile file) throws IOException {
        // Validate file type using Tika. Tika analyse the content of files not only the extension
        Tika tika = new Tika();
        String fileType = tika.detect(file.getBytes());
        if (!fileType.equals("text/html")) {
            throw new IllegalArgumentException("Invalid file type. Only HTML files are allowed.");
        }
        
        // Filter HTML content for safety against XSS attacks using Jsoup Safelist
        Safelist safelist = Safelist.relaxed().addTags("a", "p", "img").addAttributes(":all", "style", "class", "href", "src", "alt");

        String htmlContent = Jsoup.clean(new String(file.getBytes()), safelist);
        
        // Save file to server
        try {
            File dest = new File(UPLOAD_DIR + file.getOriginalFilename());
            FileUtils.writeStringToFile(dest, htmlContent, "UTF-8");
        } catch (IOException ex) {
            throw new IOException("Failed to save file: " + ex.getMessage());
        }
    }
}

