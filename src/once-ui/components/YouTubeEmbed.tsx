import React from "react";

interface YouTubeEmbedProps {
  url: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url }) => {
  // Helper function to extract the video ID from a YouTube URL.
  const getVideoId = (url: string): string | null => {
    try {
      const parsedUrl = new URL(url);
      // Works for standard YouTube URLs ("?v=" parameter)
      return parsedUrl.searchParams.get("v");
    } catch (error) {
      console.error("Invalid URL", error);
      return null;
    }
  };

  const videoId = getVideoId(url);
  if (!videoId) return null; // If no valid video id, do not render

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        height: 0,
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "16px 0",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}; 