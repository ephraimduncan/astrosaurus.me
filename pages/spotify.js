import NowPlaying from '@/components/NowPlaying';
import { PageSEO } from '@/components/SEO';
import Tracks from '@/components/Tracks';
import siteMetadata from '@/data/siteMetadata';

export default function Spotify() {
  return (
    <>
      {/* <PageSEO title="Spotify" description={siteMetadata.description} /> */}
      <div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Here's my top tracks on Spotify updated daily.
        </p>
        <Tracks track="top" />
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Recent Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Here's my recent tracks on Spotify.</p>
        <Tracks track="recent" />

        <div className="mt-12">
          <NowPlaying />
        </div>
      </div>
    </>
  );
}
