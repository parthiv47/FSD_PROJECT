package com.example.jobportal.halper;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

@Component
public class FileUploadHelper {


//    private final String uploadDir = "C:\\Users\\parthiv\\IdeaProjects\\Jobportal_Project\\jobportal\\jobportal\\src\\main\\resources\\static\\Images";
private final String uploadDir = new ClassPathResource("static/Images/").getFile().getAbsolutePath();

    public FileUploadHelper()throws IOException {
    }
    LocalDateTime currentDateTime = LocalDateTime.now();
    String input=currentDateTime.toString().replace(":", "");
    public String storeFile(MultipartFile file) {

        String fileName = StringUtils.cleanPath(input+file.getOriginalFilename());

        try {


            Path targetLocation = Paths.get(uploadDir).resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation);
            String imagelink= ServletUriComponentsBuilder.fromCurrentContextPath().path("/Images/").path(input+file.getOriginalFilename()).toUriString();

            return imagelink ;// Return the file path instead of the file name
        } catch (IOException ex) {
            throw new RuntimeException("Could not store file " + fileName + ". Please try again!", ex);
        }

    }

}
