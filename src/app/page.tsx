import HeaderDesktop from '@/examples/header/app.header';
import BackendTrack from '@/examples/track/backend.track';
import MusicTrack from '@/examples/track/music.track';
import * as React from 'react';

export default function HomePage() {
  return (
    <div>
      <HeaderDesktop />
      <div style={{ height: "100px" }}>
        adfadsf
      </div>
      {/* <MusicTrack /> */}
      <BackendTrack />
    </div>

  );
}
