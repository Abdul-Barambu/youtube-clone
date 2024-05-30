declare module 'react-native-video-player' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

    interface VideoPlayerProps {
        video: { uri: string };
        thumbnail?: { uri: string };
        videoWidth: number;
        videoHeight: number;
        duration?: number;
        autoplay?: boolean;
        defaultMuted?: boolean;
        controls?: boolean;
        loop?: boolean;
        style?: StyleProp<ViewStyle>;
    }

    export class VideoPlayer extends Component<VideoPlayerProps> { }
    export default VideoPlayer;
}
