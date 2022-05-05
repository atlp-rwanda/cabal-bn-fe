import { sendEmail } from '../src/redux/actions/Forgot.action';
import {
  FORGOTPASSWORD,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAILED,
} from '../src/redux/types/ForgotType';
import mockAxios from 'axios'
import { forgot } from '../src/redux/reducers/ForgotReducer'
const initialState = {
  loading: false,
  error: {},
  data: {},
};
describe('FORGOT REDUCER', () => {
  it("Should reset pass", async () => {
    expect(forgot(undefined, {})).toEqual(initialState)
  })
  // it('should send email', async () => {
  //   mockAxios.post.mockImplementationOnce(() => {
  //     return Promise.reject({ message: "Inavlid email" })
  //   })
  //   expect(forgot({}, sendEmail("info@me.com"))).toEqual({
  //     loading: true,
  //     error: {},
  //     data: {},
  //   })
  // })
})