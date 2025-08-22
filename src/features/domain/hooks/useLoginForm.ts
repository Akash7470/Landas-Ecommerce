import { useState } from "react";
import type { LoginFormValues } from "../types/auth";
import { validateLogin } from "../utils/validators";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
  const [values, setValues] = useState<LoginFormValues>({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Partial<Record<"username" | "password", string>>>({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const next = validateLogin(values.username, values.password);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      alert("Login successful (static demo)");
      navigate("/dashboard");
    }
  };

  return { values, errors, onChange, onSubmit, showPassword, setShowPassword };
}