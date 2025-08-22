import { Link, NavLink } from "react-router-dom";
import { ROUTE } from "../../routes/route";

export default function Navbar() {
  const link = "px-3 py-2 rounded-lg hover:bg-gray-100";
  const active = ({ isActive }: { isActive: boolean }) => (isActive ? `${link} bg-gray-100` : link);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to={ROUTE.HOME} className="text-xl font-extrabold text-yellow-500">
          LANDAS
        </Link>

        <nav className="hidden gap-1 md:flex">
          <NavLink to={ROUTE.HOME} className={active}>
            Outerwear
          </NavLink>
          <a className={link} href="#tops">
            Tops
          </a>
          <a className={link} href="#bottoms">
            Bottoms
          </a>
          <a className={link} href="#accessories">
            Accessories
          </a>
          <a className={link} href="#brand">
            Brand Story
          </a>
        </nav>

        <div className="md:hidden">☰</div>
      </div>
    </header>
  );
}