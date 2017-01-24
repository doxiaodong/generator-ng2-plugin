import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class <%= modulename %>Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: <%= modulename %>Module,
      providers: []
    }
  }
}
