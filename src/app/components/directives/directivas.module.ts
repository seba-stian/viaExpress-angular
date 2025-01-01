import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutFormatDirective } from './rut-format.directive';

@NgModule({
  declarations: [RutFormatDirective],
  imports: [CommonModule],
  exports: [RutFormatDirective],
  providers: [],
})
export class DirectivasModule {}
