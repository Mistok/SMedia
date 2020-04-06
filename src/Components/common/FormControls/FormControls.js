import React from 'react';
import Class from './formControl.module.css'

const FormControl = ({input, meta, child, ...props}) => {

    let hasError = meta.error && meta.touched;
    return(
        <div className={Class.form_control + ' ' + ( hasError ? Class.error : '')}>

            {props.children}
            { hasError && <span>{meta.error}</span> }
        </div>
    )
};

export const Textarea = (props) =>{
    const {input, meta, child, element, ...restProps} = props;
    return(
        <FormControl {...props} element={'textarea'}>
            <textarea  {...input} {...restProps} />
        </FormControl>
    )
};

export const Input = (props) =>{
    const {input, meta, child, element, ...restProps} = props;
    return(
        <FormControl {...props} element={'input'}>
            <input  {...input} {...restProps} />
        </FormControl>
    )
};
// export const Textarea = ({input, meta, ...props}) => {
//
//     let hasError = meta.error && meta.touched;
//     return(
//         <div className={Class.form_control + ' ' + ( hasError ? Class.error : '')}>
//             <textarea  {...input} {...props} />
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// };

// export const Input = ({input, meta, ...props}) => {
//
//     let hasError = meta.error && meta.touched;
//     return(
//         <div className={Class.form_control + ' ' + ( hasError ? Class.error : '')}>
//             <input  {...input} {...props} />
//             { hasError && <span>{meta.error}</span> }
//         </div>
//     )
// };