import ButtonDarkMode from "../Components/ButtonDarkMode";

export default function NavBar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-800 flex justify-end pr-10 h-[10vh] items-center">
      <ButtonDarkMode></ButtonDarkMode>
    </nav>
  );
}
