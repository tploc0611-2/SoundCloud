import HeaderDesktop from '@/examples/header/app.header';
import BackendTrack from '@/examples/track/backend.track';
import MusicTrack from '@/examples/track/music.track';
// import WaveTrack from '@/examples/track/wave.track';
import * as React from 'react';
import dynamic from 'next/dynamic';

const WaveTrack = dynamic(() => import('@/examples/track/wave.track'), {
  ssr: false,
});
export default function HomePage() {
  return (
    <div>
      <HeaderDesktop />
      <div style={{ height: "100px" }}>
        adfadsf
      </div>
      {/* <MusicTrack /> */}
      {/* <BackendTrack /> */}
      <WaveTrack />
    </div>

  );
}
