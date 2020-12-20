import PasswordVisibale from "./passwordVisibale";
import DateGroup from "./birthdayPiker";
import React, { useEffect, useState } from "react";
import InputField from "./inputField";


export default function Input({
  id,
  label,
  placeholder,
  validate,
  error,
  type,
  initData = "",
  onChange = () => { },
  onError = (err = true) => err,
}) {
  const [typed, setTyped] = useState(false);

  const [value, setValue] = useState(initData);

  const [showPassword, setShowPassword] = useState(false);

  const err = typed && validate(value);

  function handle(event) {
    setValue(event.target.value);
    setTyped(true);
  }

  useEffect(() => {
    onChange(value);
  }, [value]);

  useEffect(() => {
    setValue(initData);
  }, [initData]);

  useEffect(() => {
    onError(err);
  }, [err]);

  return (
    <fieldset className="formGroup">
      <label htmlFor={id}>
        <span>{label}</span>
        <span className="formRequestStar">*</span>
      </label>

      {type === "password" ? (
        <PasswordVisibale
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          psw={value}
          handlePswChange={handle}
          placeholder={placeholder}
        />
      ) : type === "datepicker" ? (
        <DateGroup onChange={setValue} initDate={initData} />
      ) : (
            <InputField
              id={id}
              value={value}
              placeholder={placeholder}
              onChange={handle}
            />
          )}

      {err && <span className="input_err">{error}</span>}
    </fieldset>
  );
}
