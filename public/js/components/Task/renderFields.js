import React, { Component } from 'react';

export const renderInputField = ({
        input,
        label,
        type,
        id,
        className,
        meta: { touched, error, warning }
    }) => (
    <div className="form__row task-form__row">
        <div className="form__row-inner task-form__row-inner">
            {touched &&
            ((error && <span className="form__error task-form__error">{error}</span>) ||
            (warning && <span className="form__warning task-form__warning">{warning}</span>))}
            <label htmlFor={id} className="form__label-text task-form__label-text">{label}</label>
            <input {...input} id={id} type={type} className={className} />
        </div>
    </div>
)