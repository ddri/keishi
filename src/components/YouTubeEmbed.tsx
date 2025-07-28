import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  width?: number | string;
  height?: number;
  autoplay?: boolean;
  controls?: boolean;
  startTime?: number;
  endTime?: number;
  loop?: boolean;
  muted?: boolean;
  playlist?: string;
}

export default function YouTubeEmbed({ 
  videoId,
  width = '100%',
  height = 315,
  autoplay = false,
  controls = true,
  startTime,
  endTime,
  loop = false,
  muted = false,
  playlist
}: YouTubeEmbedProps) {
  if (!videoId) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
        <p className="text-zinc-400">No YouTube video ID specified</p>
      </div>
    );
  }

  // Build YouTube embed URL with parameters
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    controls: controls ? '1' : '0',
    mute: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    rel: '0', // Don't show related videos from other channels
    modestbranding: '1', // Minimal YouTube branding
    color: 'white', // Player controls color
    iv_load_policy: '3' // Hide video annotations
  });

  if (startTime) params.append('start', startTime.toString());
  if (endTime) params.append('end', endTime.toString());
  if (playlist) params.append('playlist', playlist);
  if (loop && playlist) params.append('playlist', videoId); // Loop requires playlist

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}