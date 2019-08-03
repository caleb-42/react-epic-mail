export const auth = {
  signUp: {},
  logIn: {}
}

export const mails = {
  messages: {
    data: [
      {
        id: 1,
        firstname: 'Sam',
        lastname: 'daniel',
        email: 'sam@gmail.com',
        subject: 'welcome home',
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,",
        senttime: '02-09-2019',
        status: 'read',
      },
      {
        id: 2,
        firstname: 'mathew',
        lastname: 'charles',
        email: 'mathew@gmail.com',
        message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
        subject: 'hi there',
        senttime: '02-09-2019',
        status: 'read',
      }
    ]
  },
  active: {

  }
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
  menu: 'Mails', subMenu: 'Inbox'
}