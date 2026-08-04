import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#326CE5",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
          <line x1="50" y1="50" x2="50" y2="16" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <line x1="50" y1="50" x2="79.4" y2="33" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <line x1="50" y1="50" x2="79.4" y2="67" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <line x1="50" y1="50" x2="50" y2="84" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <line x1="50" y1="50" x2="20.6" y2="67" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <line x1="50" y1="50" x2="20.6" y2="33" stroke="white" strokeWidth="7" strokeLinecap="round" />
          <circle cx="50" cy="16" r="9" fill="white" />
          <circle cx="79.4" cy="33" r="9" fill="white" />
          <circle cx="79.4" cy="67" r="9" fill="white" />
          <circle cx="50" cy="84" r="9" fill="white" />
          <circle cx="20.6" cy="67" r="9" fill="white" />
          <circle cx="20.6" cy="33" r="9" fill="white" />
          <circle cx="50" cy="50" r="16" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
