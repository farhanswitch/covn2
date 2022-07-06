import Nav from "./Nav";
import Footer from "./Footer";

interface IProps {
  children: JSX.Element;
}
const Layout = ({ children }: IProps) => {
  return (
    <div className="w-full min-h-full font-inter">
      <Nav />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
