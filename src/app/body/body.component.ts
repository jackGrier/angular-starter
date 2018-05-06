import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @ViewChild('carousel') carousel: any;

  slides: Array<Object> = [
    {
      'html': '<div class="card-deck mb-1 text-center">\n' +
      '      <div class="card mb-4 box-shadow">\n' +
      '        <div class="card-header">\n' +
      '          <h4 class="my-0 font-weight-normal">Github</h4>\n' +
      '        </div>\n' +
      '        <div class="card-body">\n' +
      '          <ul class="list-unstyled mt-3 mb-4">\n' +
      '            <li>See my projects on Github</li>\n' +
      '            <div class="github-card"\n' +
      '                 data-github="JackGrier"\n' +
      '                 data-width="400"\n' +
      '                 data-height=""\n' +
      '                 data-theme="default"></div>\n' +
      '            <script src="https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js"></script>\n' +
      '          </ul>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '    </div>'
    },
    {
      'html': '<div class="card-deck mb-1 text-center">\n' +
      '        <div class="card mb-4 box-shadow">\n' +
      '          <div class="card-header">\n' +
      '            <h4 class="my-0 font-weight-normal">LinkedIn</h4>\n' +
      '          </div>\n' +
      '          <div class="card-body">\n' +
      '            <ul class="list-unstyled mt-3 mb-4">\n' +
      '              <li>Full stack engineer</li>\n' +
      '              <li>Experience with:</li>\n' +
      '              <li>Angular</li>\n' +
      '              <li>Angular Js</li>\n' +
      '              <li>Java</li>\n' +
      '              <li>Spring</li>\n' +
      '              <li>Hibernate</li>\n' +
      '              <li>For more <a href="https://www.linkedin.com/in/jack-grier-223a1a57/">Check out my profile</a></li>\n' +
      '              <li><img src="../../assets/CFA_badge.png" alt="CFA Certification Badge"></li>\n' +
      '            </ul>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>'
    },
    {
      'html': '      <div class="card-deck mb-1 text-center">\n' +
      '        <div class="card mb-4 box-shadow">\n' +
      '          <div class="card-header">\n' +
      '            <h4 class="my-0 font-weight-normal">Twitter</h4>\n' +
      '          </div>\n' +
      '          <div class="card-body">\n' +
      '            <a href="https://twitter.com/jgrier93?ref_src=twsrc%5Etfw" class="twitter-follow-button"\n' +
      '               data-show-count="false">Follow @jgrier93</a>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>'
    }
  ];

  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 3,
    perspective: 1,
    startSlide: 0,
    border: 2,
    dir: 'ltr',
    width: 600,
    height: 600,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  };

  slideClicked(index) {
    this.carousel.slideClicked(index);
  }
}
