import { Component } from '@angular/core';
import { EventManager, IJMRemotePeer, JMClient, IJMInfoEventTypes, IJMMediaSetting } from '@jiomeet/core-sdk-web';

@Component({
  selector: 'app-main-video-call',
  standalone: true,
  imports: [],
  templateUrl: './main-video-call.component.html',
  styleUrl: './main-video-call.component.css'
})
export class MainVideoCallComponent {

isAudioMuted = true;
isVideoMuted = true;

const jmClient = new JMClient();

// Register event before calling join meeting
const unsubscribe = EventManager.onEvent((eventInfo) => {
	const { data } = eventInfo;
	switch (eventInfo.type) {
		case IJMInfoEventTypes.PEER_JOINED:
			const { remotePeers } = data;
			remotePeers.forEach((remotePeer: IJMRemotePeer) => {
				console.log('A new peer has joined the meeting:', remotePeer);
			});
			break;
		case IJMInfoEventTypes.PEER_UPDATED:
			const { remotePeer, updateInfo } = data;
			const { action, value } = updateInfo;
			if (action === 'AUDIO_MUTE' && value === false) {
				// Subscribe to the remote peer's audio track
				const audioTrack = await this.jmClient.subscribeMedia(remotePeer, 'audio');
				// Play the track on web page
				audioTrack.play();
			} else if (action === 'VIDEO_MUTE') {
				if (value === false) {
					// Subscribe to the remote peer's video track
					const videoTrack = await this.jmClient.subscribeMedia(remotePeer, 'video');
					// Play the track on web page
					videoTrack.play('divId');
				}
			} else if (action === 'SCREEN_SHARE') {
				if (value === true) {
					// Subscribe to the remote peer's screen share track
					const screenShareTrack = await this.jmClient.subscribeMedia(remotePeer, 'screenShare');
					// Play the track on web page
					screenShareTrack.play('divId');
				}
			}
			break;
		case IJMInfoEventTypes.PEER_LEFT:
			const { remotePeers } = data;
			remotePeers.forEach((remotePeer: any) => {
				console.log('A peer has left the meeting:', remotePeer);
			});
			break;
		default:
			break;
	}
});

// Call the joinMeeting method to start the meeting
async function joinMeeting() {
	try {
		const userId = jmClient.joinMeeting({
			meetingId: '12345678',
			meetingPin: 'abcd2',
			userDisplayName: 'John',
			config: {
				userRole: 'speaker',
			},
		});
		console.log('Joined the meeting with user ID:', userId);
	} catch (error: any) {
		console.error('Failed to join the meeting:', error);
	}
}

// Mute/unMute Local Audio
async function toggleMuteAudio() {
	try {
		isAudioMuted = !isAudioMuted;
		await JMClient.muteLocalAudio(isAudioMuted);
		console.log(`Local audio ${isAudioMuted ? 'muted' : 'unmuted'}`);
	} catch (error) {
		console.error(error);
	}
}

// Mute/unMute Local Video
async function toggleMuteVideo() {
	try {
		isVideoMuted = !isVideoMuted;
		await JMClient.muteLocalVideo(isVideoMuted);
		console.log(`Local video ${isVideoMuted ? 'muted' : 'unmuted'}`);
	} catch (error) {
		console.error(error);
	}
}

// Starting screen share
async function startScreenShare() {
	try {
		const screenShareTrack = await jmClient.startScreenShare();
		// Do something with the screenShareTrack object
	} catch (error) {
		console.log('Failed to start screen share', error);
	}
}

// Stopping screen share
async function stopScreenShare() {
	try {
		await jmClient.stopScreenShare();
		// Screen share stopped successfully
	} catch (error) {
		console.log('Failed to stop screen share', error);
	}
}


}
