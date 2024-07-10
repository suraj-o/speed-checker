import Link from "next/link";

const NavFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center text-sm pb-4">
      <div>
        <Link href={"https://github.com/suraj-o"}>share you love 💓</Link>
      </div>
    </div>
  );
};

export default NavFooter;
