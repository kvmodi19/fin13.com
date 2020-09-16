import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  active = false;
  calculators = [{
    name: 'SIP Calculator',
    width: "320",
    height: "275",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/sip_calc.php?bg=e6e6e6&amp;bd=464646"
  }, {
    name: 'EMI Calculator',
    width: "325",
    height: "295",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/emi1.php?bg=e6e6e6&amp;bd=464646",
  }, {
    name: 'Lumpsum Calculatore',
    width: "280",
    height: "290",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/lumpsum_calc.php?bg=e6e6e6&amp;bd=464646",
  }, {
    name: 'Child Education Calculator',
    width: "395",
    height: "451",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/Education_calc.php?bg=e6e6e6&amp;bd=464646",
  }, {
    name: 'Child Marriage Planning',
    width: "395",
    height: "396",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/marriage_calc.php?bg=e6e6e6&amp;bd=464646",
  }, {
    name: 'Retirement Calculator',
    width: "410",
    height: "470",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/retierment_calc.php?bg=e6e6e6&amp;bd=464646",
  }, {
    name: 'SIP Past Performance',
    width: "490",
    height: "363",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/sip.php?bg=e6e6e6&amp;fc=000&amp;bd=464646",
  }, {
    name: 'STP Past Performance',
    width: "490",
    height: "382",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/stp.php?bg=e6e6e6&amp;fc=000&amp;bd=464646",
  }, {
    name: 'SWP Past performance',
    width: "490",
    height: "403",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/swp.php?bg=e6e6e6&amp;fc=000&amp;bd=464646",
  }, {
    name: 'Lumpsum Planning',
    width: "495",
    height: "400",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/lumpsum.php?bg=e6e6e6&amp;fc=000&amp;bd=464646",
  }, {
    name: 'Dividend History',
    width: "495",
    height: "320",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/dividend.php?bg=e6e6e6&amp;fc=000&amp;bd=464646",
  }, {
    name: 'NAV Viewer',
    width: "495",
    height: "400",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "http://my-eoffice.com/nav.php?bg=e6e6e6&amp;fc=000&amp;bd=464646",
  }, {
    name: 'Income Tax Calculator',
    width: "600",
    height: "835",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "no",
    src: "https://my-eoffice.com/income_tax.php",
  }, {
    name: 'Human Life Calculator',
    width: "385",
    scrolling: "YES",
    height: "600",
    frameborder: "0",
    src: "https://my-eoffice.com/humanlife.php?bg=ece7d4&amp;bd=dcd7ba",
  }, {
    name: 'Delay Cost Calculator',
    width: "320",
    height: "398",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "yes",
    src: "http://my-eoffice.com/delaycost.php?bg=e6e6e6&amp;bd=464646",
  }, {
    name: 'SIP-O-METER',
    width: "425",
    height: "433",
    style: "border-style:hidden;",
    frameborder: "0",
    scrolling: "No",
    src: "https://my-eoffice.com/sip_blue.php",
  }];
  selectedCalculator;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.selectedCalculator = Object.assign({}, this.calculators[0]);
    this.selectedCalculator.src = this.getUrl(this.calculators[0].src);
  }

  changeCalculator(calc) {
    this.selectedCalculator = Object.assign({}, calc);
    this.selectedCalculator.src = this.getUrl(calc.src);
  }

  getUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  toggleMenu() {
    this.active = !this.active;
  }
}
