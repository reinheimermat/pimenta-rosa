import {
  BadgeCheck,
  ExternalLink,
  Heart,
  Home,
  Library,
  Play,
  Search,
} from 'lucide-react'
import albumCover from '../assets/albumCover.jpg'
import cover from '../assets/cover.jpg'

export function Aggregator() {
  return (
    <div className="bg-gradiant gradient container mx-auto flex h-screen max-w-[460px] flex-col items-center py-4 text-white">
      <header className="px-4">
        <div className="mb-6 flex flex-col items-center justify-center">
          <img
            src={cover}
            alt=""
            className="h-96 w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="-mt-7 flex size-14 items-center justify-center rounded-full bg-gray-200">
            <Play className="size-6 fill-lime stroke-lime" />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="mb-1 flex items-center gap-1">
              <BadgeCheck className="size-6 fill-blue stroke-white" />
              <span className="text-2xl">Pimenta Rosa Original</span>
            </div>
            <p className="text-xs text-gray-100 ">
              Artista • Pimenta Rosa Original
            </p>
          </div>
          <div>
            <Heart className="size-5 fill-lime stroke-lime" />
          </div>
        </div>
      </header>

      <main className="mt-14 w-full px-4">
        <h1 className="mb-6 text-xl font-bold">Acompanhe no Spotify</h1>

        <div className="flex w-full items-start justify-between rounded-xl bg-pinkRose px-4 py-3 shadow-xl">
          <div className="flex items-center gap-2">
            <img
              src={albumCover}
              alt=""
              className="size-9 rounded-sm shadow-md"
            />

            <div>
              <strong className="text-xs font-bold">Na Onda da Bala</strong>
              <p className="text-[0.625rem] text-gray-50">
                Pimenta Rosa Original, Maryah Mc, Nik Mc
              </p>
            </div>
          </div>

          <a
            href="https://open.spotify.com/album/2gDqrE4yLZ21aGDSpEdv6i?si=z2hyiUfOQ-CtP3Dc8Rr3ig&nd=1&dlsi=8ebc735fb06a4017"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-rose-300/50 px-3 py-1 text-xs shadow-2xl"
            rel="noreferrer"
          >
            <span className="mt-[2px] font-bold uppercase">Link</span>
            <ExternalLink className="block size-4" />
          </a>
        </div>
      </main>

      <footer className="mt-auto flex w-full items-center justify-between bg-gray-300 p-4 pb-6">
        <div className="flex flex-col items-center gap-1">
          <Home className="size-6" />
          <p className="text-sm text-gray-100">Home</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Search className="size-6 stroke-zinc-700" />
          <p className="text-sm text-gray-100">Search</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Library className="size-6 stroke-zinc-700" />
          <p className="text-sm text-gray-100">Your Library</p>
        </div>
      </footer>
    </div>
  )
}
