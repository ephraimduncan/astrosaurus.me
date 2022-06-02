import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Track from '@/components/Track';

export default function Tracks({ track }) {
  const { data: recentTracksData } = useSWR('/api/spotify/recent', fetcher);
  const { data: topTracksData } = useSWR('/api/spotify/top', fetcher);

  console.log(topTracksData);

  if (!topTracksData || !recentTracksData) {
    return null;
  }

  return (
    <>
      <div className="border-b border-gray-200  dark:border-gray-800">
        {track === 'top' &&
          topTracksData.tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}

        {track === 'recent' &&
          recentTracksData.tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}
      </div>
    </>
  );
}
