const SwitchColorMode = () => {
  const DARK = "dark";
  const LIGHT = "ligth";

  localStorage.getItem("theme") === LIGHT &&
    document.documentElement.setAttribute("data-bs-theme", LIGHT);

  const onSwitch = (): void => {
    const newTheme =
      document.documentElement.getAttribute("data-bs-theme") === DARK
        ? LIGHT
        : DARK;

    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={onSwitch} className="btn btn-outline-info">
      Switch
    </button>
  );
};

export default SwitchColorMode;
