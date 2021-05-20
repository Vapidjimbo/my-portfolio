import { Divider } from "antd";

export default function Hero({ title, text, bgColor, color, children }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: "1em",
        textAlign: "center"
      }}
    >
      <Divider style={{color: color}}>{title}</Divider>
      <p>{text}</p>
      <div>{children}</div>
    </div>
  );
}
