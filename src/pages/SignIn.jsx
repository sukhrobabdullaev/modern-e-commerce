import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute bg-black/70 inset-0" />
      <SignIn />
    </div>
  );
}
