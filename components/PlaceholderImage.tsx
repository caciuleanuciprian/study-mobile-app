import { Card } from "tamagui";

type PlaceholderImageProps = {
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
};

export const PlaceholderImage = (props: PlaceholderImageProps) => {
  const { width, height, backgroundColor } = props;
  return (
    <Card
      style={{
        width:
          typeof width === "string"
            ? width
            : typeof width === "number"
            ? `${width}px`
            : "250px",
        height:
          typeof height === "string"
            ? height
            : typeof height === "number"
            ? `${height}px`
            : "250px",
        backgroundColor: backgroundColor ?? "red",
      }}
    ></Card>
  );
};
