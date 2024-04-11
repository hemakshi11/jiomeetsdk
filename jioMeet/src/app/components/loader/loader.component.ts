import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from './loader.service';
import { Loader } from './loader';

@Component({
  selector: 'app-loader',
  // standalone:true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() public id: string = 'global';
  public show!: boolean;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      this.show = this.id === response.id && response.status;
    });
  }
}
