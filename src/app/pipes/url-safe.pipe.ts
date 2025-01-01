import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'urlSafe',
})
export class UrlSafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        const html = this.sanitizer.bypassSecurityTrustHtml(value);
        return html;
      case 'style':
        const style = this.sanitizer.bypassSecurityTrustStyle(value);
        return style;
      case 'script':
        const script = this.sanitizer.bypassSecurityTrustScript(value);
        return script;
      case 'url':
        const url = this.sanitizer.bypassSecurityTrustUrl(value);
        return url;
      case 'resourceUrl':
        const resourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
        return resourceUrl;
      default:
        const byDefect = this.sanitizer.bypassSecurityTrustHtml(value);
        return byDefect;
    }
  }
}
