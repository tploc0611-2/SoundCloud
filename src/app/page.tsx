import HeaderDesktop from '@/examples/header/app.header';
import BackendTrack from '@/examples/track/backend.track';
import MusicTrack from '@/examples/track/music.track';
import WaveTrack from '@/examples/track/wave.track';
import DynamicUrlTrack from '@/examples/track/remote/dynamic.url.track';
import BtnTrack from '@/examples/track/remote/btn.track';
import WavesurferHook from '@/examples/track/remote/wavesurfer.hook';

export default function HomePage() {
  return (
    <div>
      <HeaderDesktop />
      <div style={{ height: "100px" }}>
        adfadsf
      </div>
      {/* <MusicTrack /> */}
      {/* <BackendTrack /> */}
      {/* <WaveTrack /> */}
      {/* <DynamicUrlTrack /> */}
      <WavesurferHook />
      {/* <BtnTrack /> */}

    </div>

  );
}
