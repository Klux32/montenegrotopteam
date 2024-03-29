"use client";
import React, { useState, useEffect } from "react";

const FormControl = ({
  setData,
  data,
  type,
  name,
  value,
  label,
  placeholder,
  rows,
  id,
  style,
  options,
}) => {
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  return (
    <div className={`col-12 mb-3`}>
      <label htmlFor={id} className="form-label mt-3">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          onChange={(e) => onChange(e)}
          className={style}
          name={name}
          id={id}
          value={data[name] != null ? data[name] : ""}
          rows={rows}
          placeholder={placeholder}
        ></textarea>
      ) : type === "checkbox" ? (
        <input
          onClick={() => setData({ ...data, checkBox: !data[name] })}
          type={type}
          checked={data[name]}
          className={style}
          name={name}
          value={data[name] != null ? data[name] : false}
          id={id}
          placeholder={placeholder}
        />
      ) : type === "select" ? (
        <select
          onChange={(e) => onChange(e)}
          className={style}
          name={name}
          value={data[name]}
          defaultValue={"Default"}
          aria-label="Default select example"
        >
          <option value={"Default"} disabled>
            Select your item
          </option>
          {options.map((index, key) => (
            <option key={key} value={index.value}>
              {index.title}
            </option>
          ))}
        </select>
      ) : (
        <input
          onChange={(e) => onChange(e)}
          type={type}
          className={style}
          name={name}
          value={data[name] != null ? data[name] : value}
          id={id}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormControl;
