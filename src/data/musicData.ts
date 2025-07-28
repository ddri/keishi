// Sample music data - replace with real IDs and URLs
export const musicTracks = {
  // Akira Soundtrack
  akira_theme: {
    title: "Akira Main Theme",
    album: "Akira Original Soundtrack",
    year: "1988",
    duration: "4:32",
    description: "The iconic opening theme that defined cyberpunk music forever.",
    coverImage: "/placeholder.svg?height=400&width=400",
    platforms: {
      spotify: {
        trackId: "4uLU6hMCjMI75M1A2tKUQC", // Example - replace with real Spotify track ID
        albumId: "6VBdVhOz4lhTFWb8TkJFXo", // Example - replace with real Spotify album ID
        url: "https://open.spotify.com/track/example"
      },
      appleMusic: {
        trackId: "1234567890", // Example - replace with real Apple Music track ID
        albumId: "1234567890", // Example - replace with real Apple Music album ID
        url: "https://music.apple.com/album/example"
      },
      bandcamp: {
        trackId: "akira-theme", // Example - replace with real Bandcamp track slug
        albumId: "akira-soundtrack", // Example - replace with real Bandcamp album slug
        artistUrl: "keishiurata", // Replace with your actual Bandcamp username
        url: "https://keishiurata.bandcamp.com/track/akira-theme"
      },
      youtube: {
        videoId: "dQw4w9WgXcQ", // Example - replace with real YouTube video ID
        url: "https://www.youtube.com/watch?v=example"
      }
    }
  },

  // Neo-Tokyo Chronicles
  neo_tokyo: {
    title: "Neo-Tokyo Nights",
    album: "Neo-Tokyo Chronicles", 
    year: "1985",
    duration: "6:15",
    description: "Atmospheric journey through the neon-lit streets of a digital metropolis.",
    coverImage: "/placeholder.svg?height=400&width=400",
    platforms: {
      spotify: {
        trackId: "example2",
        albumId: "example2", 
        url: "https://open.spotify.com/track/example2"
      },
      bandcamp: {
        trackId: "neo-tokyo-nights",
        albumId: "neo-tokyo-chronicles",
        artistUrl: "keishiurata",
        url: "https://keishiurata.bandcamp.com/track/neo-tokyo-nights"
      },
      youtube: {
        videoId: "example2",
        url: "https://www.youtube.com/watch?v=example2"
      }
    }
  },

  // Synthesized Dreams
  digital_awakening: {
    title: "Digital Awakening",
    album: "Synthesized Dreams",
    year: "1992", 
    duration: "5:48",
    description: "Ethereal textures and evolving soundscapes exploring consciousness in the digital age.",
    coverImage: "/placeholder.svg?height=400&width=400",
    platforms: {
      spotify: {
        trackId: "example3",
        albumId: "example3",
        url: "https://open.spotify.com/track/example3"
      },
      bandcamp: {
        trackId: "digital-awakening",
        albumId: "synthesized-dreams", 
        artistUrl: "keishiurata",
        url: "https://keishiurata.bandcamp.com/track/digital-awakening"
      },
      appleMusic: {
        trackId: "example3",
        albumId: "example3",
        url: "https://music.apple.com/album/example3"
      }
    }
  }
};

export const albumData = {
  akira_soundtrack: {
    title: "Akira Original Soundtrack",
    year: "1988",
    type: "Symphonic Suite",
    description: "The legendary masterpiece that redefined anime music through complex orchestral and electronic fusion.",
    coverImage: "/placeholder.svg?height=400&width=400",
    platforms: {
      spotify: {
        albumId: "6VBdVhOz4lhTFWb8TkJFXo",
        url: "https://open.spotify.com/album/example"
      },
      bandcamp: {
        albumId: "akira-soundtrack",
        artistUrl: "keishiurata", 
        url: "https://keishiurata.bandcamp.com/album/akira-soundtrack"
      },
      appleMusic: {
        albumId: "1234567890",
        url: "https://music.apple.com/album/example"
      }
    }
  }
};