export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="myContainer py-6">{children}</main>;
};
