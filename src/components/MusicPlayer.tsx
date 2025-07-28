import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Play, ExternalLink, ShoppingCart, Music } from 'lucide-react';
import SpotifyEmbed from './SpotifyEmbed';
import BandcampEmbed from './BandcampEmbed';
import AppleMusicEmbed from './AppleMusicEmbed';
import YouTubeEmbed from './YouTubeEmbed';

interface MusicTrack {
  title: string;
  album?: string;
  year?: string;
  duration?: string;
  description?: string;
  coverImage?: string;
  platforms: {
    spotify?: {
      trackId?: string;
      albumId?: string;
      url?: string;
    };
    appleMusic?: {
      trackId?: string;
      albumId?: string;
      url?: string;
    };
    bandcamp?: {
      trackId?: string;
      albumId?: string;
      artistUrl?: string;
      url?: string;
    };
    youtube?: {
      videoId?: string;
      url?: string;
    };
    soundcloud?: {
      url?: string;
    };
  };
}

interface MusicPlayerProps {
  track: MusicTrack;
  defaultPlatform?: 'spotify' | 'bandcamp' | 'appleMusic' | 'youtube';
  showPlatformSelector?: boolean;
  compact?: boolean;
}

export default function MusicPlayer({ 
  track, 
  defaultPlatform = 'spotify',
  showPlatformSelector = true,
  compact = false 
}: MusicPlayerProps) {
  const [activePlatform, setActivePlatform] = useState<string>(defaultPlatform);

  // Get available platforms
  const availablePlatforms = Object.entries(track.platforms)
    .filter(([_, config]) => config && Object.keys(config).length > 0)
    .map(([platform]) => platform);

  const platformLabels = {
    spotify: 'Spotify',
    appleMusic: 'Apple Music',
    bandcamp: 'Bandcamp',
    youtube: 'YouTube',
    soundcloud: 'SoundCloud'
  };

  const platformColors = {
    spotify: 'bg-[#1DB954] hover:bg-[#1DB954]/80',
    appleMusic: 'bg-[#FA243C] hover:bg-[#FA243C]/80',
    bandcamp: 'bg-[#1DA0C3] hover:bg-[#1DA0C3]/80',
    youtube: 'bg-[#FF0000] hover:bg-[#FF0000]/80',
    soundcloud: 'bg-[#FF8500] hover:bg-[#FF8500]/80'
  };

  const renderPlayer = () => {
    const platform = track.platforms[activePlatform as keyof typeof track.platforms];
    if (!platform) return null;

    switch (activePlatform) {
      case 'spotify':
        return (
          <SpotifyEmbed 
            trackId={track.platforms.spotify?.trackId}
            albumId={track.platforms.spotify?.albumId}
            height={compact ? 152 : 380}
            compact={compact}
          />
        );
      
      case 'bandcamp':
        return (
          <BandcampEmbed 
            trackId={track.platforms.bandcamp?.trackId}
            albumId={track.platforms.bandcamp?.albumId}
            artistUrl={track.platforms.bandcamp?.artistUrl}
            title={track.title}
            height={compact ? 200 : 400}
            showPurchaseButton={!compact}
          />
        );
      
      case 'appleMusic':
        return (
          <AppleMusicEmbed 
            trackId={track.platforms.appleMusic?.trackId}
            albumId={track.platforms.appleMusic?.albumId}
            height={compact ? 200 : 400}
          />
        );
      
      case 'youtube':
        return (
          <YouTubeEmbed 
            videoId={track.platforms.youtube?.videoId || ''}
            height={compact ? 200 : 315}
          />
        );
      
      default:
        return null;
    }
  };

  const getExternalLink = (platform: string) => {
    const config = track.platforms[platform as keyof typeof track.platforms];
    return config?.url || '#';
  };

  return (
    <Card className="bg-zinc-950 border-zinc-800 overflow-hidden">
      <CardContent className="p-0">
        {/* Track Info Header */}
        {!compact && (
          <div className="p-6 border-b border-zinc-800">
            <div className="flex items-start space-x-4">
              {track.coverImage && (
                <img 
                  src={track.coverImage} 
                  alt={track.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-light mb-2 tracking-wide text-white">{track.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-zinc-400">
                  {track.album && <span>{track.album}</span>}
                  {track.year && <span>{track.year}</span>}
                  {track.duration && <span>{track.duration}</span>}
                </div>
                {track.description && (
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{track.description}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Platform Selector */}
        {showPlatformSelector && availablePlatforms.length > 1 && (
          <div className="p-4 border-b border-zinc-800">
            <div className="flex flex-wrap gap-2">
              {availablePlatforms.map((platform) => (
                <Badge
                  key={platform}
                  variant={activePlatform === platform ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1 ${
                    activePlatform === platform
                      ? platformColors[platform as keyof typeof platformColors] || 'bg-white text-black'
                      : 'border-zinc-600 text-zinc-300 hover:bg-zinc-800'
                  }`}
                  onClick={() => setActivePlatform(platform)}
                >
                  {platformLabels[platform as keyof typeof platformLabels] || platform}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Music Player */}
        <div className="p-4">
          {renderPlayer()}
        </div>

        {/* Action Buttons */}
        {!compact && (
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-zinc-400">
                Stream on your favorite platform
              </div>
              <div className="flex space-x-2">
                {/* Bandcamp Purchase Button (Priority) */}
                {track.platforms.bandcamp && (
                  <Button
                    size="sm"
                    className="bg-[#1DA0C3] hover:bg-[#1DA0C3]/80 text-white"
                    onClick={() => window.open(track.platforms.bandcamp?.url || '#', '_blank')}
                  >
                    <ShoppingCart className="h-3 w-3 mr-2" />
                    Buy
                  </Button>
                )}
                
                {/* External Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  onClick={() => window.open(getExternalLink(activePlatform), '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Open in {platformLabels[activePlatform as keyof typeof platformLabels]}
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}