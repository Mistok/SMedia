import React from "react";
import Class from "./ProfileInfo.module.css";
import {createField} from "../../common/FormsControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import {Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, isOwner, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={`${Class.description} `}>
            {isOwner && <div className={Class.profile_info_section}> <button onClick={()=> {}}>Save changes</button> </div>}
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div className={Class.profile_info_section}>
                <strong>Full Name:</strong>
                {createField("full name", "fullName", [requiredField], Input)}
            </div>
            <div className={Class.status_container}>
            </div>
            <div className={Class.links_section}>
                <div className={Class.socials}>
                    {Object.keys(profile.contacts).map((contact) => {
                        return  <div key={contact} >
                            <strong>{contact}</strong>
                            {createField("", "contacts."+contact, [], Input, {type: "text"})}
                        </div>
                    })}
                </div>
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