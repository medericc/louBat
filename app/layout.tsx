import './globals.css'
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
      <body>{children}</body>
    </html>
  );
}
