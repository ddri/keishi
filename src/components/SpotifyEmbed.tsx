import React from 'react';

interface SpotifyEmbedProps {
  trackId?: string;
  albumId?: string;
  playlistId?: string;
  artistId?: string;
  height?: number;
  compact?: boolean;
  theme?: 'dark' | 'light';
}

export default function SpotifyEmbed({ 
  trackId, 
  albumId, 
  playlistId, 
  artistId, 
  height = 380,
  compact = false,
  theme = 'dark'
}: SpotifyEmbedProps) {
  // Determine the embed URL based on what's provided
  let embedUrl = '';
  
  if (trackId) {
    embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
  } else if (albumId) {
    embedUrl = `https://open.spotify.com/embed/album/${albumId}`;
  } else if (playlistId) {
    embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}`;
  } else if (artistId) {
    embedUrl = `https://open.spotify.com/embed/artist/${artistId}`;
  }

  if (!embedUrl) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
        <p className="text-zinc-400">No Spotify content specified</p>
      </div>
    );
  }

  // Add query parameters
  const params = new URLSearchParams({
    utm_source: 'generator',
    theme: theme === 'dark' ? '0' : '1'
  });

  if (compact) {
    params.append('view', 'coverart');
  }

  const fullUrl = `${embedUrl}?${params.toString()}`;

  return (
    <div className="w-full">
      <iframe
        src={fullUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg border border-zinc-800"
        title="Spotify Player"
      />
    </div>
  );
}