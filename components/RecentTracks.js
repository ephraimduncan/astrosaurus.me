import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Track from '@/components/Track';

export default function Tracks() {
  const { data } = useSWR('/api/spotify/recent', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="border-b border-gray-200  dark:border-gray-800">
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </div>
    </>
  );
}
