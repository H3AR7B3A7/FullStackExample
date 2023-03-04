import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class SharedModule {}
