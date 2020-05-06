import {Component} from '@angular/core';

@Component({
    selector: 'app-carousels-full-width',
    templateUrl: './carousels-full-width.component.html',
})
export class CarouselsFullWidthComponent {

    slides = [{}, {}, {}, {}, {}, {}, {}];
    slideConfig = {
        "slidesToShow": 4,
        "slidesToScroll": 4,
        "dots": true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        "prevArrow": "<button type=\"button\" class=\"slick-prev\"><i class=\"ion-ios-arrow-back font-size-xl\"></i></button>",
        "nextArrow": "<button type=\"button\" class=\"slick-next\"><i class=\"ion-ios-arrow-forward font-size-xl\"></i></fa-icon></button>"
    };
}
