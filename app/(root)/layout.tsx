import MessageModal from '../../components/modal/message/MessageModal';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="w-screen h-screen flex items-center justify-center
      bg-white dark:bg-themeDark text-textBlack dark:text-white relative"
    >
      <MessageModal/>
      {children}
    </main>
  );
}