import React from 'react';
import styles from './FormsConrols.module.css'
import {required} from "../../utils/validators/validators";
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "") }>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + ( hasError ? styles.error : "") }>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            type="text"
            validate={validators}
            {...props}
        />{text}
    </div>
)