/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-restricted-globals */
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import { Avatar, Badge } from '@mui/material';
import store from '../src/redux/store';
import NavBar from '../src/components/navBar';
import { ReadOneTrip } from '../src/components/read_one_trip';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const stor = mockStore({});

describe('READ ONE & COMMENTS', () => {
  const history = createMemoryHistory();
  localStorage.setItem(
    'userCredentials',
    JSON.stringify({
      role_id: 1,
    }),
  );
  it('should render the read one modal', () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <ReadOneTrip />
        </Router>
      </Provider>,
    );
    const text = screen.getByText(/Reason/i);
    expect(text).toBeInTheDocument();
    localStorage.removeItem('userCredentials');
  });

  it('should render navBar', () => {
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <NavBar
            pages={[
              'rick',
              <Badge
                badgeContent="12"
                color="error"
                badge
                sx={{ color: '#FFC800' }}
              />,
              <Avatar src="https://here" alt="profile image" />,
            ]}
          />
        </Router>
      </Provider>,
    );
    const text = screen.getByText(/rick/i);
    expect(text).toBeInTheDocument();
  });
});
