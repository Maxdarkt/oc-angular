import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis toujours',
        imageUrl: 'https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8',
        createdDate: new Date(),
        snaps: 40,
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountains',
        description: 'Un endroit magnifique pour les randonnées',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 50,
        location: 'Wicklow'
      },
      {
        title: 'Un bon repas',
        description: 'Un plat savoureux',
        imageUrl: 'https://n6g3q5q8.rocketcdn.me/wp-content/uploads/2022/08/Tajine-aux-crevettes-au-Thermomix-Un-delicieux-plat-marocain-a-preparer-470x264.jpg',
        createdDate: new Date(),
        snaps: 60
      }
    ];
  }

}
