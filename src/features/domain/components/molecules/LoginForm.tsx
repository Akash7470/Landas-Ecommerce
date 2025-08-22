import Input from "../atoms/Input";  
import PasswordInput from "../atoms/PasswordInput";  
import Button from "../atoms/Button";  
import { useLoginForm } from "../../hooks/useLoginForm";  

export default function LoginForm() {  
  const { values, errors, onChange, onSubmit, showPassword, setShowPassword } = useLoginForm();
    

  return (  
    <form onSubmit={onSubmit} className="flex flex-col gap-4">  
      <Input  
        label="Username"  
        name="username"  
        placeholder="Enter your username"  
        value={values.username}  
        onChange={onChange}  
        error={errors.username}  
        autoComplete="username"  
      />  
      <PasswordInput  
        label="Password"  
        name="password"  
        placeholder="Enter your password"  
        value={values.password}  
        onChange={onChange}  
        error={errors.password}  
        visible={showPassword}  
        onToggle={() => setShowPassword(v => !v)}  
        autoComplete="current-password"  
      />  
      <label className="flex items-center gap-2 text-sm">  
        <input type="checkbox" name="rememberMe" checked={values.rememberMe} onChange={onChange} />  
        Remember me  
      </label>  
      <Button type="submit">Login</Button>  
      <Button type="button" variant="secondary">Sign Up</Button>  
    </form>  
  );  
}  