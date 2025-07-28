import React from 'react';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

interface BandcampEmbedProps {
  albumId?: string;
  trackId?: string;
  artistUrl?: string;
  title?: string;
  height?: number;
  minimal?: boolean;
  showPurchaseButton?: boolean;
}

export default function BandcampEmbed({ 
  albumId, 
  trackId, 
  artistUrl = 'keishiurata',
  title,
  height = 400,
  minimal = false,
  showPurchaseButton = true 
}: BandcampEmbedProps) {
  // Construct Bandcamp embed URL
  let embedUrl = '';
  
  if (albumId) {
    embedUrl = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=1a1a1a/linkcol=ffffff/tracklist=false/transparent=true/`;
  } else if (trackId) {
    embedUrl = `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=large/bgcol=1a1a1a/linkcol=ffffff/tracklist=false/transparent=true/`;
  }

  // Construct purchase URL
  const purchaseUrl = albumId 
    ? `https://${artistUrl}.bandcamp.com/album/${albumId}`
    : trackId 
    ? `https://${artistUrl}.bandcamp.com/track/${trackId}`
    : `https://${artistUrl}.bandcamp.com`;

  if (!embedUrl && !artistUrl) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
        <p className="text-zinc-400">No Bandcamp content specified</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Bandcamp Player Embed */}
      {embedUrl && (
        <iframe
          src={embedUrl}
          seamless
          width="100%"
          height={height}
          className="rounded-lg border border-zinc-800 bg-zinc-900"
          title={`Bandcamp Player${title ? ` - ${title}` : ''}`}
        />
      )}

      {/* Purchase/Support Section */}
      {showPurchaseButton && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-light text-lg mb-2 tracking-wide">
                Support the Artist
              </h4>
              <p className="text-zinc-400 text-sm font-light">
                Purchase high-quality downloads and support independent music directly
              </p>
            </div>
            <div className="flex space-x-3">
              <Button
                size="sm"
                className="bg-[#1DA0C3] hover:bg-[#1DA0C3]/80 text-white font-light tracking-wide"
                onClick={() => window.open(purchaseUrl, '_blank')}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy on Bandcamp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                onClick={() => window.open(purchaseUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}