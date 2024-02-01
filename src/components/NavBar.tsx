import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/movies?sort_by=popularity.desc", label: "Movies" },
  ];

  return (
    <div className="sticky top-0 z-[51] bg-[#14181C] py-4 text-white">
      <div className="container">
        <div className="flex items-center justify-between md:justify-normal md:gap-20">
          <Link className="text-2xl font-bold" to="/">
            whatowatch
          </Link>
          <div className="hidden font-semibold text-slate-300 md:flex md:gap-4">
            {links.map((link, index) => (
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                key={index}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          {/* Navigation for mobile device */}
          <Sheet>
            <SheetTrigger className="hover:text-slate-300 md:hidden">
              <AlignJustify />
            </SheetTrigger>
            <SheetContent className="z-[100] w-full border-none bg-[#14181C]">
              <SheetHeader className="py-10">
                <div className="grid gap-6 text-3xl font-semibold text-slate-300">
                  {links.map((link, index) => (
                    <NavLink
                      key={index}
                      tabIndex={-1}
                      className={({ isActive }) =>
                        isActive ? "text-white" : ""
                      }
                      to={link.path}
                    >
                      <SheetClose className="w-full p-1" key={index}>
                        {link.label}
                      </SheetClose>
                    </NavLink>
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
