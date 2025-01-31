import Providers from "@/store/Provider";
import "./globals.css";
import ErrorBoundary from "@/components/error-boundries/ErrorBoundary";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
