import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = 
  [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis toujours',
      imageUrl: 'https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8',
      createdDate: new Date(),
      snaps: 40,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountains',
      description: 'Un endroit magnifique pour les randonnées',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 50,
      location: 'Wicklow'
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Un plat savoureux',
      imageUrl: 'https://n6g3q5q8.rocketcdn.me/wp-content/uploads/2022/08/Tajine-aux-crevettes-au-Thermomix-Un-delicieux-plat-marocain-a-preparer-470x264.jpg',
      createdDate: new Date(),
      snaps: 60
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(snap => snap.id === faceSnapId);
    if(!faceSnap) {
      throw new Error(`Could not find snap with id ${faceSnapId}`);
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}