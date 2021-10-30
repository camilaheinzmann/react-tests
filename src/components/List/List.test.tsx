import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("Testing List component", () => {
  it("should be able to add new item", () => {
    render(<List />);

    const input = screen.getByTestId("input-add-item");
    const form = screen.getByTestId("form-add-item");

    userEvent.type(input, "React Native");
    fireEvent.submit(form);

    expect(screen.getByTestId("React Native")).toBeTruthy();
  });

  it("should be able to list three items", () => {
    const { getByTestId } = render(<List />);

    const input = getByTestId("input-add-item");
    const form = getByTestId("form-add-item");

    fireEvent.change(input, { target: { value: "React Native" } });
    fireEvent.submit(form);
    fireEvent.change(input, { target: { value: "Flutter" } });
    fireEvent.submit(form);

    const techList = getByTestId("ul-items");
    expect(techList.children.length).toBe(3);
  });

  it("should be able to delete a item", () => {
    render(<List />);

    const input = screen.getByTestId("input-add-item");
    const form = screen.getByTestId("form-add-item");

    userEvent.type(input, "React Native");
    fireEvent.submit(form);

    expect(screen.getByTestId("React Native")).toBeTruthy();

    const itemButton = screen.getByTestId("React Native-btn-delete");
    userEvent.click(itemButton);

    expect(screen.queryByTestId("React Native")).toBeNull();
  });

  it("should not be able to add a blank item", () => {
    render(<List />);

    const input = screen.getByTestId("input-add-item");
    const form = screen.getByTestId("form-add-item");
    const techList = screen.getByTestId("ul-items");

    expect(techList.children.length).toBe(1);

    userEvent.type(input, " ");
    fireEvent.submit(form);

    expect(techList.children.length).toBe(1);
  });

  it("should not be able to add a repeated item", () => {
    render(<List />);

    const input = screen.getByTestId("input-add-item");
    const form = screen.getByTestId("form-add-item");
    const techList = screen.getByTestId("ul-items");

    userEvent.type(input, "React");
    fireEvent.submit(form);

    expect(techList.children.length).toBe(1);
  });

  it("button delete should be disabled only for React technology", () => {
    render(<List />);

    const button = screen.getByTestId("React-btn-delete");
    expect(button).toBeDisabled();
  });
});
