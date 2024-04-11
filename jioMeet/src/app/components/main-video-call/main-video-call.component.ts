import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { EventManager, IJMRemotePeer, JMClient, IJMInfoEventTypes, IJMMediaSetting, IJMJoinMeetingParams, IJMLocalAudioTrack, IJMLocalPeer, IJMLocalScreenShareTrack, IJMLocalVideoTrack, IJMPreviewManager, IJMRemoteAudioTrack, IJMRemoteScreenShareTrack, IJMRemoteVideoTrack, IJMConnectionStateEvent, IJMRequestMediaType } from '@jiomeet/core-sdk-web';
import { async } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MediaserviceService } from '../../services/mediaservice.service';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader/loader.service';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-main-video-call',
  standalone: true,
  imports: [MatIconModule, LoaderComponent, CommonModule],
  providers: [
    LoaderService, MediaserviceService
  ],
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
