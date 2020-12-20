import React from "react";
import TextField from "@material-ui/core/TextField";

export default function InputField({ id, value, placeholder, onChange }) {
    return (
        <TextField
            fullWidth
            required
            id={id}
            placeholder={placeholder}
            InputProps={{ disableUnderline: true }}
            value={value}
            onChange={onChange}
        />
    );
}