import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-image-preview-dialog',
  templateUrl: './image-preview-dialog.component.html',
  styleUrls: ['./image-preview-dialog.component.scss'],
})
export class ImagePreviewDialogComponent implements OnInit, OnDestroy {
  index;
  final;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ImagePreviewDialogComponent>
  ) {}

  ngOnInit(): void {
    this.final = this.data.images.length - 1;
    this.index = this.data.index;
    let self = this;
    $(document).on('keydown', function (e) {
      switch (e.code) {
        case 'ArrowRight':
          if (self.index != self.final) self.index = self.index + 1;
          break;
        case 'ArrowLeft':
          if (self.index != 0) self.index = self.index - 1;
          break;
        case 'Escape':
          self.dialogRef.close()
          break;
        default:
          break;
      }
    });    
    $('#dialog').on('click', function (e) {
      if( !(["IMG", "BUTTON", "MAT-ICON"].includes(e.target.tagName))){
        self.dialogRef.close();
      }
    });
  }

  ngOnDestroy(): void {
    console.log('in destroy');
    $(document).off('keydown');
    $('#dialog').off('click');
  }

  left() {
    this.index = this.index - 1;
  }

  right() {
    this.index = this.index + 1;
  }
}
