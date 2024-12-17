import "./globals.css";
import { LoaderProvider } from "./context/LoaderContext"; // Importer le contexte
import Loader from "./components/Loader"; // Importer le loader

export const metadata = {
  title: "Louann Battiston",
  description: "Louann Battiston meneuse de Duke",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <LoaderProvider>
          <Loader /> {/* Le loader global */}
          {children} {/* Le contenu de l'application */}
        </LoaderProvider>
      </body>
    </html>
  );
}
