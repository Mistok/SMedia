import React from "react";
import styles from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props }) => {

    const hasError = meta.touched &&  meta.error;
    return (
        <div className={styles.form_control + " " + (hasError ? styles.error : "")}>
            <textarea {...props} {...input} {...meta} />
            {hasError &&  <span>{meta.error}</span>}

        </div>
    )
};