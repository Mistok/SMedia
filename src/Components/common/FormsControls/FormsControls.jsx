import React from "react";
import styles from "./FormsControls.module.css";


const FormControl = ({input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.form_control + " " + (hasError ? styles.error : "")}>
            <div>{props.children}</div>
            {hasError &&  <span>{meta.error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...restProps} {...input} {...meta} />
        </FormControl>
    )
};
export const Input = (props) => {
    const {input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...restProps} {...input} {...meta} />
        </FormControl>
    )
};