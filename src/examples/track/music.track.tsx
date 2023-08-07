'use client'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

const MusicTrack = () => {
    return (
        <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
            <Container>
                <AudioPlayer
                    autoPlay
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
                    onPlay={e => console.log("onPlay")}
                // other props here
                />
            </Container>
        </AppBar>
    )
}

export default MusicTrack;