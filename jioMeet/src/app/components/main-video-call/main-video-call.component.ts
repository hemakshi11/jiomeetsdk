import { Component } from '@angular/core';
import { EventManager, IJMRemotePeer, JMClient, IJMInfoEventTypes, IJMMediaSetting, IJMJoinMeetingParams, IJMLocalAudioTrack, IJMLocalPeer, IJMLocalScreenShareTrack, IJMLocalVideoTrack, IJMPreviewManager, IJMRemoteAudioTrack, IJMRemoteScreenShareTrack, IJMRemoteVideoTrack, IJMConnectionStateEvent, IJMRequestMediaType } from '@jiomeet/core-sdk-web';
import { async } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-main-video-call',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './main-video-call.component.html',
  styleUrl: './main-video-call.component.css'
})
export class MainVideoCallComponent {
  
  

}
