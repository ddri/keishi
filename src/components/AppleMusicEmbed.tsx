import React from 'react';

interface AppleMusicEmbedProps {
  albumId?: string;
  trackId?: string;
  playlistId?: string;
  artistId?: string;
  country?: string;
  height?: number;
  theme?: 'dark' | 'light';
}

export default function AppleMusicEmbed({ 
  albumId, 
  trackId, 
  playlistId, 
  artistId,
  country = 'us',
  height = 400,
  theme = 'dark' 
}: AppleMusicEmbedProps) {
  // Construct Apple Music embed URL
  let embedUrl = '';
  
  if (albumId) {
    embedUrl = `https://embed.music.apple.com/${country}/album/${albumId}`;
  } else if (trackId) {
    embedUrl = `https://embed.music.apple.com/${country}/song/${trackId}`;
  } else if (playlistId) {
    embedUrl = `https://embed.music.apple.com/${country}/playlist/${playlistId}`;
  } else if (artistId) {
    embedUrl = `https://embed.music.apple.com/${country}/artist/${artistId}`;
  }

  if (!embedUrl) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
        <p className="text-zinc-400">No Apple Music content specified</p>
      </div>
    );
  }

  // Add theme parameter
  const params = new URLSearchParams({
    app: 'music',
    theme: theme
  });

  const fullUrl = `${embedUrl}?${params.toString()}`;

  return (
    <div className="w-full">
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height={height}
        style={{
          width: '100%',
          maxWidth: '660px',
          overflow: 'hidden',
          background: 'transparent'
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={fullUrl}
        className="rounded-lg border border-zinc-800"
        title="Apple Music Player"
      />
    </div>
  );
}