import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { EventManager, IJMRemotePeer, JMClient, IJMInfoEventTypes, IJMMediaSetting, IJMJoinMeetingParams, IJMLocalAudioTrack, IJMLocalPeer, IJMLocalScreenShareTrack, IJMLocalVideoTrack, IJMPreviewManager, IJMRemoteAudioTrack, IJMRemoteScreenShareTrack, IJMRemoteVideoTrack, IJMConnectionStateEvent, IJMRequestMediaType } from '@jiomeet/core-sdk-web';
import { async } from 'rxjs';



@Component({
  selector: 'app-main-video-call',
  standalone: true,
  imports: [],
  templateUrl: './main-video-call.component.html',
  styleUrl: './main-video-call.component.css'
})
export class MainVideoCallComponent {

	@ViewChild('videoElement') videoElement!:ElementRef;

	ngOnInit(){
		this.startCamera();
	}

	async startCamera(){
		try{
			const stream=await navigator.mediaDevices.getUserMedia({video:true});
			this.videoElement.nativeElement.srcObject = stream;
		}catch(error){
			// console.error("Error", error);
		}	
	}

}
