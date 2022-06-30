import { getNowPlaying } from '../../../lib/spotify';

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.currently_playing_type === 'episode') {
    return res.status(200).json({
      isPlaying: true,
      title: 'Listening to a Podcast',
      artist: 'Spotify',
      songUrl: 'https://open.spotify.com/show/2Shpxw7dPoxRJCdfFXTWLE',
    });
  } else {
    const isPlaying = song.is_playing;
    const title = song.item?.name;
    const artist = song.item?.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item?.album.name;
    const albumImageUrl = song.item?.album.images[0].url;
    const songUrl = song.item?.external_urls.spotify;

    console.log(song);

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  }
};
