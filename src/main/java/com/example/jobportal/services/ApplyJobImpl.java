package com.example.jobportal.services;

import com.example.jobportal.dao.ApplyJobDao;
import com.example.jobportal.entities.ApplyJobModel;
import com.example.jobportal.entities.PostModel;
import com.example.jobportal.halper.FileUploadHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class ApplyJobImpl implements ApplyJobService {
    @Autowired
    private ApplyJobDao applyJobDao;
    @Autowired
    private FileUploadHelper fileUploadHelper;

    @Override
    public ApplyJobModel saveApplyJob(ApplyJobModel applyJobModel, MultipartFile file) {
        applyJobModel.setResume(fileUploadHelper.storeFile(file));
        ApplyJobModel savedApplyJob = applyJobDao.save(applyJobModel);
        return savedApplyJob;
    }

    @Override
    public List<ApplyJobModel> allApplyJobs() {
        List<ApplyJobModel> applyJobs = applyJobDao.findAll();
        return applyJobs;
    }

    @Override
    public List<ApplyJobModel> getApplyJobById(Long id) {

        return this.applyJobDao.findApplyJobsById(id);
    }

    @Override
    public ApplyJobModel updateApplyJob(ApplyJobModel applyJobModel ,Long apply) {
        Optional<ApplyJobModel> existingApplyJobOptional = applyJobDao.findById(apply);

        if (existingApplyJobOptional.isPresent()) {
            ApplyJobModel existingApplyJob = existingApplyJobOptional.get();
            // Update fields as needed
            existingApplyJob.setName(applyJobModel.getName());
            existingApplyJob.setEmail(applyJobModel.getEmail());
            existingApplyJob.setContactNumber(applyJobModel.getContactNumber());
            existingApplyJob.setResume(applyJobModel.getResume());
            applyJobModel.setId(apply);
            return applyJobDao.save(applyJobModel);
        } else {
            // Handle not found case
            return null;
        }
    }

    @Override
    public ApplyJobModel deleteApplyJobById(Long id) {
        Optional<ApplyJobModel> existingApplyJobOptional =applyJobDao.findById(id);
        if(existingApplyJobOptional.isPresent())
        {
            ApplyJobModel existingApplyJob = existingApplyJobOptional.get();
            applyJobDao.deleteById(id);
            return existingApplyJob;
        }
        else {
            return null;
        }

    }
}
