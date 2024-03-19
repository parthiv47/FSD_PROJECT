import {
  startApplying,
  applySuccess,
  applyFailure,
  deleteSuccess,
  userApplyjobs
  
} from "./applyjobReducer";
import axios from 'axios';


export const applyJob=(data)=>async(dispatch)=>{

  try {
    startApplying();
    const response= await axios.post("http://localhost:8090/api/v1/applyjob",data)

    applySuccess(response.data);

     
  } catch (error) {
    applyFailure(error.response.data.message);
  }

}


export const getAllJob=( )=>async(dispatch)=>{

  try {
    startApplying();
    const response= await axios.get("http://localhost:8090/api/v1/applyjob")

    applySuccess(response.data);

     
  } catch (error) {
    applyFailure(error.response.data.message);
  }
  
}

export const deleteJobById=( )=>async(dispatch)=>{

  try {
    startApplying();
    const response= await axios.delete("http://localhost:8090/api/v1/applyjob")

    dispatch(deleteSuccess());
     
  } catch (error) {
    applyFailure(error.response.data.message);
  }
  
}

export const ApplyJobById=(id)=>async(dispatch)=>{

  try {
    startApplying();
    const response= await axios.post(`http://localhost:8090/api/v1/applyjob/${id}`);

    dispatch(userApplyjobs(response.data));
     
  } catch (error) {
    applyFailure(error.response.data.message);
  }
  
}