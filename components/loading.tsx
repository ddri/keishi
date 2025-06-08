import { Music } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-white to-zinc-400 rounded-lg flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Music className="h-8 w-8 text-black" />
        </div>
        <div className="text-xl font-light tracking-wide mb-2">Loading</div>
        <div className="text-sm text-zinc-400 tracking-widest uppercase">Please wait...</div>
      </div>
    </div>
  )
} 