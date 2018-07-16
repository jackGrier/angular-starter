import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  panels: Array<Object> = [
    {
      name: 'gitHub',
      title: 'GitHub',
      content: '        <div class="card-header">\n' +
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
      '        </div>',
      class: 'jumbotron p-3 p-md-5 text-white rounded bg-dark'
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      content: '<div class="card flex-md-row mb-4">' +
      '<div class="card-body d-flex flex-column align-items-start">' +
      '<h5 class="mb-0">' +
      '            <ul class="list-unstyled mt-3 mb-4 p-2 text-muted">\n' +
      '              <li>Full stack engineer</li>\n' +
      '              <li>Experience with:</li>\n' +
      '              <li>Angular</li>\n' +
      '              <li>Angular Js</li>\n' +
      '              <li>Java</li>\n' +
      '              <li>Spring</li>\n' +
      '              <li>Hibernate</li>\n' +
      '            </ul>' +
      '</h5>' +
      '<a href="https://www.linkedin.com/in/jack-grier-223a1a57/">Check out my profile</a>' +
      '</div>' +
      '<img class="card-img-right flex-auto d-none d-lg-block" ' +
      'alt="CFA Badge" style="width: 200px; height: 250px;" src="../../assets/CFA_badge.png"/>' +
      '</div>',
      class: 'jumbotron p-3 p-md-5 text-black rounded bg-light'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      content: '<div class="card-body">\n' +
      '<a href="https://twitter.com/jgrier93?ref_src=twsrc%5Etfw" class="twitter-follow-button"\n' +
      'data-show-count="false">Follow @jgrier93</a>\n' +
      '<img class="card-img-right"' +
      'alt="Twitter Icon" style="width: 10px; height: 10px; max-width: 30px; max-height: 30px;" src="../../assets/Twitter-Logo.png"/>' +
      '</div>',
      class: 'jumbotron p-3 p-md-5 text-white rounded bg-dark'
    }
  ];

}
