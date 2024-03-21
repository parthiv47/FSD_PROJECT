package com.example.jobportal.controller;

import com.example.jobportal.Exception.ErrorResponse;
import com.example.jobportal.entities.ApplyJobModel;
import com.example.jobportal.halper.FileUploadHelper;
import com.example.jobportal.services.ApplyJobService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class ApplyJobController {

    @Autowired
    private ApplyJobService applyJobService;
    @Autowired
    private FileUploadHelper fileUploadHelper;
    @PostMapping("/api/v1/applyjobs")
    public ResponseEntity<?> saveApplyJob(@ModelAttribute ApplyJobModel applyJobModel,
                                          @RequestParam("file") @Valid @NotNull MultipartFile file) {


        ApplyJobModel savedApplyJob = null;
        try {
            savedApplyJob = this.applyJobService.saveApplyJob(applyJobModel,file);
            return ResponseEntity.of(Optional.of(savedApplyJob));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error"));
        }
    }

    @GetMapping("/api/v1/applyjobs")
    public ResponseEntity<?> allApplyJobs() {
        try {
            List<ApplyJobModel> applyJobs = this.applyJobService.allApplyJobs();
            if (applyJobs.size() <= 0) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), "No apply jobs found"));
            }
            return ResponseEntity.of(Optional.of(applyJobs));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error"));
        }
    }

    @GetMapping("/api/v1/applyjobs/{id}")
    public ResponseEntity<?> allApplyJobs(@PathVariable Long jobid) {
        try {
            List<ApplyJobModel> applyJobs = (List<ApplyJobModel>) this.applyJobService.getApplyJobById(jobid);
            if (applyJobs.size() <= 0) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body(new ErrorResponse(HttpStatus.OK.value(), "No apply jobs found"));
            }
            return ResponseEntity.of(Optional.of(applyJobs));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error"));
        }
    }

    @PutMapping("/api/v1/applyjobs/{id}")
    public ResponseEntity<?> updateApplyJobById(@RequestBody ApplyJobModel applyJobModel,
                                                @PathVariable("id") Long applyJobId) {
        try {
            ApplyJobModel updatedApplyJob = this.applyJobService.updateApplyJob(applyJobModel,applyJobId);
            if (updatedApplyJob == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), "Apply job not found with id: " + applyJobId));
            }
            return ResponseEntity.of(Optional.of(updatedApplyJob));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error"));
        }
    }

    @DeleteMapping("/api/v1/applyjobs/{id}")
    public ResponseEntity<?> deleteApplyJobById(@PathVariable("id") Long applyJobId) {
        try {
            ApplyJobModel deletedApplyJob = this.applyJobService.deleteApplyJobById(applyJobId);
            if (deletedApplyJob == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ErrorResponse(HttpStatus.NOT_FOUND.value(), "Apply job not found with id: " + applyJobId));
            }
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body("Delete successful");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Internal Server Error"));
        }
    }
}
