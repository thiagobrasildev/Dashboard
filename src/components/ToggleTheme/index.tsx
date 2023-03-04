import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import { shade } from "polished";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  toggle(): void;
}

export const ToggleTheme = ({ toggle }: Props) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
      <FaSun size={20} color="#ffffff" />
      <Switch
        onChange={toggle}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.2, colors.background)}
        onColor={colors.background}
      />
      <FaMoon size={20} color="#ffffff" />
    </div>
  );
};
