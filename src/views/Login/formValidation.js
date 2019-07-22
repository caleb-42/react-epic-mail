import * as Yup from 'yup'

export default Yup.object().shape({
  email: Yup.string().label('Email').email().required(),
  password: Yup.string().label('Password').min(5).required()
})