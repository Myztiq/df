import Promise from "bluebird";
export default {
  getInvestments: function(){
    return new Promise(function (resolve) {
      resolve([
        {
          name: 'Vanguard Insititutional Index',
          id: 'VINIX',
          type: 'Large Cap Blend',
          oneYear: 11.56,
          threeYear: 19.39,
          fiveYear: 16.24,
          fee: 0.05
        },
        {
          name: 'Vanguard FTSE Developed Markets',
          id: 'VEA',
          type: 'Large Cap Foriegn Blend',
          oneYear: -4.19,
          threeYear: 11.92,
          fiveYear: 9.94,
          fee: 0.09
        },
        {
          name: 'Fidelity Contrafund',
          id: 'FCNTX',
          type: 'Large Cap Growth U.S. Equities',
          oneYear: 12.51,
          threeYear: 17.95,
          fiveYear: 15.99,
          fee: 0.29
        },
        {
          name: 'Vanguard Emerging Markets',
          id: 'VWO',
          type: 'Large Cap Emerging Markets',
          oneYear: -2.61,
          threeYear: 3.82,
          fiveYear: 4.18,
          fee: 0.33
        },
        {
          name: 'Fidelity Spartan 500 Index',
          id: 'FUSEX',
          type: 'Large Cap Blend',
          oneYear: 11.41,
          threeYear: 20.52,
          fiveYear: 15.74,
          fee: 0.10
        },
        {
          name: 'Vanguard Total Bond Market Index',
          id: 'VBMFX',
          type: 'Total Bond Market',
          oneYear: 2.05,
          threeYear: 0.90,
          fiveYear: 3.26,
          fee: 0.05
        },
        {
          name: 'Target Date Fund',
          id: 'VFORX',
          type: 'Diversifed portfolio for 2040',
          oneYear: 3.28,
          threeYear: 13.82,
          fiveYear: 13.50,
          fee: .25,
          targetDateFund: true
        }
      ])
    });
  }

};
