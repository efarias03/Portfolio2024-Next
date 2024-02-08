import App from "./page";

import "./styles/styles.css";

export const metadata = {
  title: 'Enzo Farias Portfolio | Full-Stack Developer',
  description: 'Brazilian Creative Full-Stack Developer & Designer Enthusiast with a variety of tools for my team.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body id="grained-body">{children}</body>
    </html>
  )
}
