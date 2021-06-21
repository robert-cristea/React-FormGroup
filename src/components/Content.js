import React, { useState } from 'react';
import './Content.css';

const Content = () => {

    const [area, setArea] = useState("");
    const [name, setName] = useState("");
    const [aws, setAWS] = useState("IAM");
    const [isExistingPolicy, setIsExistingPolicy] = useState(false);
    const [role, setRole] = useState("");
    const [policy, setPolicy] = useState("");
    const [tags, setTags] = useState("");
    const [approver, setApprover] = useState("");

    const [areaError, setAreaError] = useState("");
    const [nameError, setNameError] = useState("");
    const [awsError, setAWSError] = useState("");
    const [roleError, setRoleError] = useState("");
    const [policyError, setPolicyError] = useState("");
    const [tagsError, setTagsError] = useState("");
    const [approverError, setApproverError] = useState("");

    const errorMessage = "Cannot be empty!";

    const submitHandler = (event) => {
        event.preventDefault();

        if (area === '' || name === '' || aws === '' || role === '' || policy === '' || tags === '' || approver === '') {
            alert("You should fill in all fields.");
            if (area === '') setAreaError('Cannot be empty!');
            else setAreaError('');
            if (name === '') setNameError('Cannot be empty!');
            else setNameError('');
            if (aws === '') setAWSError('Cannot be empty!');
            else setAWSError('');
            if (role === '') setRoleError('Cannot be empty!');
            else setRoleError('');
            if (policy === '') setPolicyError('Cannot be empty!');
            else setPolicyError('');
            if (tags === '') setTagsError('Cannot be empty!');
            else setTagsError('');
            if (approver === '') setApproverError('Cannot be empty!');
            else setApproverError('');
        }
        else {
            setAreaError('');
            setNameError('');
            setAWSError('');
            setRoleError('');
            setPolicyError('');
            setTagsError('');
            setApproverError('');

            setArea('');
            setName('');
            setAWS('IAM');
            setIsExistingPolicy(false);
            setRole('');
            setPolicy('');
            setTags('');
            setApprover('');
        }


        const data = {
            "area": area,
            "name": name,
            "aws": aws,
            "existing_policy": isExistingPolicy,
            "role": role,
            "policy": policy,
            "tags": tags,
            "approver": approver,
        }

        console.log(data);
    }

    const changeHandler = (event) => {

        const key = event.target.name;
        const value = event.target.value;

        switch (key) {
            case "area":
                if (value === ""){
                    setAreaError(errorMessage);
                }else{
                    setAreaError("");
                }
                setArea(value);
                break;
            case "name":
                if(value === ""){
                    setNameError(errorMessage);
                }else{
                    setNameError("");
                }
                setName(value);
                break;
            case "aws":
                if(value === ""){
                    setAWSError(errorMessage);
                }else{
                    setAWSError("")
                }
                setAWS(value);
                break;
            case "existing_policy":
                if (value === "yes")
                    setIsExistingPolicy(true);
                else
                    setIsExistingPolicy(false);
                break;
            case "role":
                if(value === ""){
                    setRoleError(errorMessage);
                }else{
                    setRoleError("");
                }
                setRole(value);
                break;
            case "policy":
                if(value === ""){
                    setPolicyError(errorMessage)
                }else{
                    setPolicyError('');
                }
                setPolicy(value);
                break;
            case "tags":
                if(value === ""){
                    setTagsError(errorMessage)
                }else{
                    setTagsError("");
                }
                setTags(value);
                break;
            case "approver":
                if(value === ""){
                    setApproverError(errorMessage);
                }else{
                    setApproverError("");
                }
                setApprover(value);
                break;
            default:
                break;
        }

    }

    const cancelHandler = () => {
        
        setAreaError('');
        setNameError('');
        setAWSError('');
        setRoleError('');
        setPolicyError('');
        setTagsError('');
        setApproverError('');
        
    }

    return (
        <div style={{ width: "75%" }}>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="area">Area Name</label>
                    <div className="input-group">
                        <select className="custom-select" id="area" value={area} name="area" onChange={changeHandler}>
                            <option value="">Choose...</option>
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem" }}>{areaError}</span>
                </div>
                <div className="mb-3">
                    <label className="sub-label" htmlFor="name">Name:</label>
                    <div className="input-group">
                        <input type="text" className="form-control" name="name" onChange={changeHandler} value={name} style={{ borderRadius: "0.25rem" }} />
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem" }}>{nameError}</span>
                </div>
                <div className="mb-3">
                    <label className="sub-label" htmlFor="aws">Choose AWS Service </label>
                    <div className="input-group">
                        <select className="form-control" value={aws} id="aws" name="aws" onChange={changeHandler}>
                            <option value="IAM">IAM</option>
                            <option value="CAM">CAM</option>
                        </select>
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem" }}>{awsError}</span>
                </div>
                <div className="mb-3">
                    <div className="d-flex">
                        <p id="policy-label">Existing Policy?</p>
                        <div className="ml-4">
                            <div>
                                <input type="radio" id="yes" name="existing_policy" className="" value={'yes'} onChange={changeHandler} checked={isExistingPolicy}/>
                                <label className="ml-1" htmlFor="yes" style={{ fontSize: "14px" }}>Yes</label>
                            </div>
                            <div>
                                <input type="radio" id="no" name="existing_policy" className="" value={'no'} onChange={changeHandler} checked={!isExistingPolicy}/>
                                <label className="ml-1" htmlFor="no" style={{ fontSize: "14px" }}>No</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <label className="sub-sub-label" htmlFor="role">Role Name</label>
                        <input className="form-control form-control-sm" name="role" id="role" style={{ width: "85%" }} type="text" value={role} onChange={changeHandler} placeholder="Alpha-Numeric Characters Only" />
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem", marginLeft: "100px" }}>{roleError}</span>
                </div>
                <div class="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <label className="sub-sub-label" htmlFor="policy">Policy</label>
                        <input className="form-control form-control-sm" name="policy" id="policy" style={{ width: "85%" }} type="text" value={policy} onChange={changeHandler} placeholder="We can also add the AWS Policy generator link down here" />
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem", marginLeft: "100px" }}>{policyError}</span>
                </div>
                <div class="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <label className="sub-sub-label" htmlFor="role">Tags Info</label>
                        <input className="form-control form-control-sm" name="tags" id="tags" style={{ width: "85%" }} type="text" value={tags} onChange={changeHandler} />
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem", marginLeft: "100px" }}>{tagsError}</span>
                </div>
                <div class="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <label className="sub-sub-label" htmlFor="role">Approver Info</label>
                        <input className="form-control form-control-sm" name="approver" id="approver" style={{ width: "85%" }} type="text" value={approver} onChange={changeHandler} />
                    </div>
                    <span style={{ color: "red", fontSize: "0.8rem", marginLeft: "100px" }}>{approverError}</span>
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <button className="btn btn-danger" id="cancel" style={{ color: "white!important" }} onClick={cancelHandler}>Cancel</button>
                    <button type="submit" className="btn btn-primary ml-4" id="submit" style={{ color: "white" }}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Content;