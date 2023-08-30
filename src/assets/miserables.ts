const authLib: Lib = {
  group: 1,
  id: "Authentication Lib",
  links: ['Shared', 'Analytics', 'Logging'],
  nodes: [
    {
      id: 'login'
    },
    {
      id: 'register'
    },
    {
      id: 'reset-password'
    },
    {
      id: 'password-recovery'
    },
    {
      id: 'twofa'
    },
    {
      id: 'ui-captcha'
    },
    {
      id: 'ui-promotion'
    },
    {
      id: 'ui-illustration'
    },
    {
      id: 'util-password-validator'
    },
    {
      id: 'api-authentication'
    }
  ]
};
const accountLib: Lib = {
  group: 2,
  id: "Account Lib",
  links: ['User', 'Authentication', 'Kyc', 'Ordering', "Shared"],
  nodes: [
    {
      id: 'account-info'
    },
    {
      id: 'security-page'
    },
    {
      id: 'credit-cards'
    },
    {
      id: 'iban-cards'
    }
  ]
};
const walletLib: Lib = {
  group: 3,
  id: "Wallet Lib",
  links: ["Currencies", "Market", "User", "Analytics", "Authentication", "Ordering"],
  nodes: [
    {
      id: 'wallet'
    },
    {
      id: 'deposit-crypto'
    },
    {
      id: 'deposit-rial'
    },
    {
      id: 'withdraw-crypto'
    },
    {
      id: 'withdraw-rial'
    },
    {
      id: 'convert-currency'
    },
    {
      id: 'balance'
    },
  ]
};
const messagingLib: Lib = {
  group: 4,
  id: "Messaging Lib",
  links: [],
  nodes: []
};
const marketLib: Lib = {
  group: 5,
  id: "Markets Lib",
  links: ["Analytics", "Currencies", "Shared"],
  nodes: [
    {
      id: 'markets'
    },
    {
      id: 'treemap'
    },
    {
      id: 'price-alert'
    }
  ]
};
const orderingLib: Lib = {
  group: 6,
  id: "Ordering Lib",
  links: ['Market', 'Analytics', 'Logging', 'Config', 'Authentication' ,'Messaging', 'Shared'], // TODO: Should Config be a domain?
  nodes: [
    {
      id: 'orders'
    },
    {
      id: 'place-orders'
    }
  ]
};
const accountingLib: Lib = {
  group: 7,
  id: "Accounting Lib",
  nodes: [
    {
      id: 'pnl-summary'
    },
    {
      id: 'best-traders'
    }
  ]
};
const sharedLib: Lib = {
  group: 8,
  id: "Shared Lib",
  nodes: [
    {
      id: 'announcement'
    },
    {
      id: 'commissions'
    },
    {
      id: 'desktop-header'
    },
    {
      id: 'empty'
    },
    {
      id: 'news-bar'
    },
    {
      id: 'util-title'
    },
    {
      id: 'util-language'
    }
  ]
};
const currenciesLib: Lib = {
  group: 9,
  id: "Currencies Lib",
  nodes: []
};
const analyticsLib: Lib = {
  group: 10,
  id: "Analytics Lib",
  nodes: []
};
const loggingLib: Lib = {
  group: 11,
  id: "Logging Lib",
  nodes: []
};
const userLib: Lib = {
  group: 12,
  id: "User Lib",
  links: [],
  nodes: [
    {
      id: 'active-sessions'
    }
  ]
};
const referralLib: Lib = {
  group: 13,
  id: "Referral Lib",
  links: [],
  nodes: []
};
const robotLib: Lib = {
  group: 14,
  id: "Robot Lib",
  links: ['Markets'],
  nodes: []
};
const giftCardLib: Lib = {
  group: 15,
  id: "GiftCard Lib",
  links: ['Currencies'],
  nodes: []
};
const uiKitLib: Lib = {
  group: 16,
  id: "UIKit Lib",
  links: [],
  nodes: [
    {
      id: 'coin-card'
    }
  ]
};

const libs: Lib[] = [
  authLib,
  accountLib,
  walletLib,
  marketLib,
  messagingLib,
  orderingLib,
  accountingLib,
  currenciesLib,
  analyticsLib,
  loggingLib,
  userLib,
  uiKitLib,
  referralLib,
  robotLib,
  giftCardLib,
  sharedLib
]

export const json: Data = {
  nodes: libs.map(i => {
    i.nodes.forEach(j => {
      j.group = i.group;
      if (!j.links) j.links = [];
      j.links?.push(i.id);
    });
    // i.nodes = [];
    i.nodes.push({
      id: i.id,
      group: i.group,
      links: i.links?.map(i => i + ' Lib') || [],
    })
    return i.nodes;
  }).flat(),
  links: libs.map(i => {
    const links: Link[] = [];
    i.nodes.forEach(j => {
      j.links?.forEach(k => links.push({
        source: j.id,
        target: k,
        value: 1
      }));
    });
    return links;
  }).flat()
}

declare type Lib = {
  group: number,
  id: string,
  nodes: Node[],
  links?: string[]
}

declare type Node = {
  id: string;
  links?: string[];
  group?: number;
}

declare type Link = {
  source: string;
  target: string;
  value: number;
}

declare type Data = {
  nodes: Node[];
  links: Link[];
}
