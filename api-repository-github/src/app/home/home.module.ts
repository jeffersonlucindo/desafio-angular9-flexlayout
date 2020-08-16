import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home.component';
import { EmptyComponent } from './empty/empty.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule
  ],
  declarations: [HomeComponent,EmptyComponent,DetailComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
