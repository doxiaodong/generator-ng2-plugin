import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { <%= modulename %>Module } from '../../src'

@NgModule({
  imports: [
    CommonModule,
    <%= modulename %>Module
  ],
  exports: [
    CommonModule,
    <%= modulename %>Module
  ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    }
  }
}
