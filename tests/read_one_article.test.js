import { render, screen } from "@testing-library/react";
import React from "react";
import DetailsDialog from "../src/components/dialog";

describe('READ ONE & COMMENTS',()=>{
  it('should render the read one modal',()=>{
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <DetailsDialog />
        </Router>
      </Provider>
    )
    const text=screen.getByText(/Trip details/i)
    expect(text).toBeInTheDocument()
  })
})