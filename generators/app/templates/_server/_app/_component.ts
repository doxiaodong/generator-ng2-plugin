import {
  Component,
  ViewEncapsulation,
  OnInit
} from '@angular/core'

@Component({
  selector: '<%= appname %>-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './template.html',
  styleUrls: [
    './style.css'
  ]
})
export class AppComponent implements OnInit {
  ngOnInit() { }
}
