import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LabirintoComponent } from './labirinto/labirinto.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LabirintoComponent, IndexComponent, AjudaComponent]
})
export class UiModule { }
