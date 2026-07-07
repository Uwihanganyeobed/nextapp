
export const metadata={
  title: "Lorem Dashvoard"
}
export default function RootLayout({
  children,
}:{children: React.ReactNode}) {
  return (
   <div>
          {children}
 </div>
  )
}
