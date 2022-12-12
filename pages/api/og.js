import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const font = fetch(new URL('../../public/fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export default async function (req) {
  const fontData = await font;

  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has('title');
  const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Ephraim Atta-Duncan';

  const isLongTitle = title.length > 30;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white',
          fontFamily: 'Inter',
          backgroundColor: '#000',
          color: '#fff',
          border: '6px solid white',
        }}
      >
        <div
          style={{
            left: 80,
            top: 80,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            width="32"
            height="32"
            src="https://pbs.twimg.com/profile_images/1593380348485844996/ZsjjzAMD_400x400.jpg"
            style={{
              borderRadius: 128,
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: '32px',
            }}
          >
            astrosaurus.me
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '80px',
            width: 'auto',
            maxWidth: !hasTitle ? 1200 : isLongTitle ? 1000 : 600,
            fontSize: isLongTitle ? 80 : 90,
            fontWeight: 700,
            lineHeight: '120%',
            letterSpacing: '-5px',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'bold',
        },
      ],
    }
  );
}
