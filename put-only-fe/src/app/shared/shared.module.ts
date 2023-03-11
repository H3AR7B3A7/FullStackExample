import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class SharedModule {}
