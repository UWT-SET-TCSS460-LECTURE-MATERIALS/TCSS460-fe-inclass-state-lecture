import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

/**
 * Favicon icon generator
 * Generates a simplified icon version of the State Flow logo
 */
export default function Icon() {
  const purple = "#9c27b0";
  const blue = "#1976d2";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Icon version - simplified for small size */}
          <circle cx="100" cy="100" r="30" fill={purple} />
          <circle cx="100" cy="50" r="15" fill={blue} />
          <circle cx="150" cy="100" r="15" fill={blue} />
          <circle cx="100" cy="150" r="15" fill={blue} />
          <circle cx="50" cy="100" r="15" fill={blue} />
          <circle cx="100" cy="100" r="10" fill="white" opacity="0.8" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
