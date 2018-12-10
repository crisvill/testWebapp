import { images } from './../../mocks/images.data';
import { ImageService } from './../../services/image.service';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  loadedData = false;
  items: any[];

  constructor(private readonly imageService: ImageService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.imageService.getImages('7').subscribe(
      data => {
        this.items = data;
        this.loadedData = true;
      },
      err => console.log('Error en la carga de imagenes')
    );
  }
}
