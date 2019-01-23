import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoUrl: string;

  constructor() { }

  ngOnInit() {
    console.log(this.videoUrl);
    
  }

}