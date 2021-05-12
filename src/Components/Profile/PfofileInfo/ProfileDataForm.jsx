import React from "react";
import Class from "./ProfileInfo.module.css";
import {createField} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import {Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, isOwner}) => {
    return (
        <form onSubmit={handleSubmit} className={`${Class.description} `}>
            {isOwner && <div className={Class.profile_info_section}> <button onClick={()=> {}}>Save changes</button> </div>}
            <div className={Class.profile_info_section}>
                <strong>Full Name:</strong>
                {createField("full name", "fullName", [requiredField], Input)}
            </div>
            <div className={Class.status_container}>
            </div>
            <div className={Class.links_section}>

                <div className={Class.profile_info_section}>
                    <strong> Looking for a job:</strong>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div className={Class.profile_info_section}>
                    <div><strong>My professional skills:</strong></div>
                    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div className={Class.profile_info_section}>
                    <strong>About me:</strong>
                    {createField("About me", "aboutMe", [], Textarea)}

                </div>
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;