import { SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./components/themeProvider";

export default function App() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
    </ThemeProvider>
  );
}
