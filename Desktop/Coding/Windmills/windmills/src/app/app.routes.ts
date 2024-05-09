import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: `home`, component: HomeComponent },
  { path: `contact`, component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: `**`, component: HomeComponent, pathMatch: 'full' },
];
