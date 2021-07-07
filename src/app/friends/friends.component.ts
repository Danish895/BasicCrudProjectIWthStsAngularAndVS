import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  banner = "/assets/images/banner.jpg";
  youtubefront = "/assets/images/youtube_1.png";
  javaproject = "/assets/images/youtube_4.png";
  amcatseries = "/assets/images/youtube_5.png";
  cocubesseries = "/assets/images/youtube_6.png";
  allvideos = "/assets/images/youtube_2.png";
  instagram = "/assets/images/instagram_1.png";
  

  constructor() { }

  ngOnInit() {
  }

}
