import * as React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import store from '../src/redux/store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import {
  assignRoleAction,
  getRolesAction,
} from '../src/redux/actions/user_role_settings.action';
import UserSettingsModal from '../src/components/user_role';
import store from '../src/redux/store';
import {
  ASSIGNROLE,
  GETALLROLES,
} from '../src/redux/types/user_role_settings.types';
import { assignRoleReducer } from '../src/redux/reducers/user_role_settings.reducer';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const stor = mockStore({});

describe('USER_ROLE_SETTINGS TESTS', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    stor.clearActions();
  });
  it('should test the display of role settings modal', () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <UserSettingsModal />
        </Router>
      </Provider>,
    );

    const Text = screen.getByText(/Assign role to users/i);
    expect(Text).toBeInTheDocument();
  });

  it('should test assign role action', async () => {
    const value = {
      email: 'REQUESTER@gmail.com',
      role: 'MANAGER',
    };
    const mes = 'hey there';
    const expectation = {
      message: mes,
    };

    store.dispatch(assignRoleAction(mes));
    await waitFor(() => {
      store.subscribe(() => {
        expect(store.getState().assignRoleReducer).toEqual(expectation);
      });
    });
  });

  it('should test get all roles action', async () => {
    const role = [1, 2];
    const expectedAction = {
      type: GETALLROLES,
      payload: role,
    };
    const initialState = {
      error: '',
      roles: role,
    };

    stor.dispatch(getRolesAction(role));
    await waitFor(() => {
      stor.subscribe(() => {
        expect(stor.getState().getRoleReducer).toEqual(initialState);
      });
    });
  });

  it('should test user role settings reducer', async () => {
    const initialState = {
      message: '',
      error: '',
    };
    const mes = 'yoooo';
    const err = 'nooo';

    const expection = {
      type: ASSIGNROLE,
      payload: mes,
    };

    expect(assignRoleReducer(initialState, {})).toEqual(initialState);
  });
});
