import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewDialogComponent } from '../image-preview-dialog/image-preview-dialog.component';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent implements OnInit {
  @Input() screenshots;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  open(items, index) {
    const dialogRef = this.dialog.open(ImagePreviewDialogComponent, {
      width: '100%',
      height: 'auto',
      data: {
        images: items,
        index: index,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
