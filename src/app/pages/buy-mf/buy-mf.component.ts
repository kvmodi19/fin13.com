import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-mf',
  templateUrl: './buy-mf.component.html',
  styleUrls: ['./buy-mf.component.scss']
})
export class BuyMfComponent implements OnInit {

  mfCompanies = [
    {
      name: 'SBI Mutual Fund',
      src: 'http://www.konfyans.com/amc/images/754_SBI_100x45.jpg',
      href: 'https://www.sbimf.com/INVESTORCENTER/ASPX/frmlogin.aspx?ARN_CODE=ARN-67045'
    },
    {
      name: 'IDFC Mutual Fund',
      src: 'http://www.konfyans.com/amc/images/738_IDFC_100x45.jpg',
      href: 'https://mfonline.idfcmf.com/?brokercode=ARN-67045'
    },
    {
      name: 'HDFC Mutual Fund',
      src: 'https://investor.hdfcfund.com/mfonline/Hdfcmain.aspx?DistributorCode=ARN-67045"',
      href: 'http://www.konfyans.com/amc/images/738_HDFC_100x45.jpg'
    },
    {
      name: 'HDFC Mutual Fund Investonline',
      src: 'http://www.konfyans.com/amc/images/738_HDFC_100x45.jpg',
      href: 'https://investor.hdfcfund.com/mfonlineform/ExistingFolio.aspx?DistributorCode=ARN-67045'
    },
    {
      name: 'RELIANCE Mutual Fund',
      src: 'http://www.konfyans.com/amc/images/722_Reliance_100x45.jpg',
      href: 'https://converz.karvymfs.com/ReliancePOm/TransactHome.aspx?Myagent=ARN-67045'
    },
    {
      name: 'FRANKLIN TEMPLETON Mutual Fund',
      src: 'http://www.konfyans.com/amc/images/754_FT_100x45.jpg',
      href: 'https://online.franklintempletonindia.com/asp_app/Investors/OnlineAccount/OnlineAcc_BrkTrans.asp?arncode=ARN-67045'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
