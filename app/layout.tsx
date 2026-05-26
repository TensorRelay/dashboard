export const metadata = {
  title: 'TensorRelay - dashboard',
  description: 'Real-time monitoring dashboard for model performance and infrastructure health',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
