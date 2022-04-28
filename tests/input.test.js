import React from 'react';
import renderer from 'react-test-renderer';

import InputField from '../src/components/input';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<InputField />).toJSON();
  expect(tree).toMatchSnapshot();
});
