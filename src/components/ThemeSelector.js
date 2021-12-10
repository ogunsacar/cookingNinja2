import "./ThemeSelector.css";
import modeIcon from "../assets/mode-icon.svg";

import { useTheme } from "../hooks/useTheme";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

export default function ThemeSelector() {
  const valueProps = useTheme();

  const toggleMode = () => {
    valueProps.changeMode(valueProps.mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt=""
          onClick={toggleMode}
          style={{
            filter: valueProps.mode === "dark" ? "invert(100%)" : "invert(20%)",
          }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => valueProps.changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
