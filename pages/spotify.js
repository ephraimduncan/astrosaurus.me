import TopTracks from '@/components/TopTracks';
import RecentTracks from '@/components/RecentTracks';

export default function Spotify() {
  return (
    <div>
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Top Tracks
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Here's my top tracks on Spotify updated daily.
      </p>
      <TopTracks />
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Recent Tracks
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Here's my recent tracks on Spotify.</p>
      <RecentTracks />
    </div>
  );
}
