"use client";

type YouTubeEmbedProps = {
  /** YouTube video ID (e.g. from url https://www.youtube.com/watch?v=VIDEO_ID) */
  videoId: string;
  /** Optional title for iframe (accessibility) */
  title?: string;
  /** Optional className for wrapper */
  className?: string;
};

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  className = "",
}: YouTubeEmbedProps) {
  if (!videoId) return null;

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-lg bg-black ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
