import "../styles/toggleTheme.css";

import { useTheme } from "../contexts/theme";

function ToggleTheme() {
 
  const {theme, handleClick } = useTheme();
  console.log(theme)

 
  
  return (
    <label className="toggle">
      <input onClick={handleClick} className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch" />
    </label>
  );
}

export default ToggleTheme;
