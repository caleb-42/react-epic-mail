/* eslint-disable import/prefer-default-export */
export const addMailInputs = {
  text: [
    {
      placeholder: "johndoe@epicmail.com",
      name: "email",
      required: true,
      type: "email",
      label: "Email",
      position: "flex-col"
    },
    {
      placeholder: "Subject",
      name: "subject",
      required: true,
      type: "text",
      label: "Subject",
      position: "flex-col"
    },
    {
      placeholder: "Message",
      name: "message",
      rows: 5,
      required: true,
      type: "textarea",
      label: "Message",
      position: "flex-col"
    },
  ],
  radio: [
    {
      name: "msgTo",
      type: "radio",
      label: "Stranger",
      id: "stranger",
      value: "stranger"
    },
    {
      name: "msgTo",
      type: "radio",
      label: "Contact",
      id: "contact",
      value: "contact"
    },
    {
      name: "msgTo",
      type: "radio",
      label: "Group",
      id: "group",
      value: "group"
    },
  ]
};