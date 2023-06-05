import { Component } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Haykel_MKADDEM_TEST_Smart_Conseil';
  constructor() {
    this.loadScripts('assets/js/plugins.js');
    this.loadScripts('assets/js/theme.js');
  }
  loadScripts(jsFile: string) {
    // This array contains all the files/CDNs
    const dynamicScripts = [
      jsFile,
      //Load all your script files here'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
