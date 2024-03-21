package com.example.jobportal.services;

import com.example.jobportal.entities.ApplyJobModel;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ApplyJobService {

    ApplyJobModel saveApplyJob(ApplyJobModel applyJobModel, MultipartFile file);

    List<ApplyJobModel> allApplyJobs();

    List<ApplyJobModel> getApplyJobById(Long id);

    ApplyJobModel updateApplyJob(ApplyJobModel applyJobModel,Long apply);

    ApplyJobModel deleteApplyJobById(Long id);


}
