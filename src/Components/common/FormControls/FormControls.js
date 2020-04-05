import React from 'react';
import Class from './formControl.module.css'

export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.error && meta.touched;
    return(
        <div className={Class.form_control + ' ' + ( hasError ? Class.error : '')}>
            <textarea  {...input} {...props} />
            { hasError && <span>{meta.error}</span> }
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.error && meta.touched;
    return(
        <div className={Class.form_control + ' ' + ( hasError ? Class.error : '')}>
            <input  {...input} {...props} />
            { hasError && <span>{meta.error}</span> }
        </div>
    )
};