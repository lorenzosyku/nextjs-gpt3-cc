import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-800 text-gray-300">
        <header className="flex w-full justify-center pt-5">
          <h1 className="text-lg font-semibold">GPT-3 Assistant</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
