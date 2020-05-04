import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule
];


@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule { }
