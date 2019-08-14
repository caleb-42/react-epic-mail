export const auth = {
  signUp: {},
  logIn: {},
  isAuthenticated: false,
  user: {}
}

export const modal = {
  open: false,
  payload: {
    values: {},
    kind: ''
  }
}

export const mails = {
  messages: {
    data: []
  },
  response: { empty: '' },
  active: {

  },
  loading: false
};

export const navs = [
  {
    name: 'Mails',
    subNavs: [
      'Inbox',
      'Unread',
      'Sent',
      'Draft'
    ]
  },
  {
    name: 'Groups'
  },
  {
    name: 'Settings'
  },
]

export const activeNav = {
  menu: 'Mails', subMenu: 'Inbox',
  open: false
}