import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("NavBar prikazuje naziv prodavnice", () => {
  render(
    <BrowserRouter>
      <NavBar cartNum={0} />
    </BrowserRouter>,
  );

  const title = screen.getByText("ElabStore");

  expect(title).toBeVisible();
});
