import HeaderDesktop from '@/examples/header/app.header';
import BackendTrack from '@/examples/track/backend.track';
import MusicTrack from '@/examples/track/music.track';
import WaveTrack from '@/examples/track/wave.track';
import DynamicUrlTrack from '@/examples/track/remote/dynamic.url.track';
import BtnTrack from '@/examples/track/remote/btn.track';
import WavesurferHook from '@/examples/track/remote/wavesurfer.hook';
import SoundCloudTrack from '@/examples/track/remote/soundcloud.track';
import ScTime from '@/examples/track/remote/sc.time';
import CustomizeRender from '@/examples/track/remote/customize.render';
import HoverRender from '@/examples/track/remote/hover.render';
import CommentRender from '@/examples/track/remote/comment.render';
import TooltipRender from '@/examples/track/remote/tooltip.render';
import SimpleSlider from '@/examples/main/slider';

export default function HomePage() {
  return (
    <div>
      <HeaderDesktop />
      <div style={{ height: "100px" }}>
        adfadsf
      </div>
      <MusicTrack />
      {/* <BackendTrack /> */}
      {/* <WaveTrack /> */}
      {/* <DynamicUrlTrack /> */}
      {/* <WavesurferHook /> */}
      {/* <BtnTrack /> */}
      {/* <SoundCloudTrack /> */}
      {/* <ScTime /> */}
      {/* <CustomizeRender /> */}
      {/* <HoverRender /> */}
      {/* <CommentRender /> */}
      {/* <TooltipRender /> */}
      {/* <SimpleSlider /> */}
    </div>

  );
}
