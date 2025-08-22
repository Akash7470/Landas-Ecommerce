import LoginForm from "../molecules/LoginForm";

export default function LoginCard() {
  const onSubmit = (data: { username: string; password: string; rememberMe: boolean }) => {
    // Handle login logic here  

  }
  return (
    <div className="min-h-dvh grid place-items-center bg-gradient-to-b from-white to-yellow-50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-extrabold text-yellow-500">LANDAS</h1>
        <LoginForm onSubmit={onSubmit} />
        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} LANDAS. All rights reserved.</p>
      </div>
    </div>
  );
}