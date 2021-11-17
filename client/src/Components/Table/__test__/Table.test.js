import React from "react"
import Table from "../Table"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("checks if table contains \"summary\"", () => {
    const component = render(<Table />);
    const tableElement = component.getByTestId("summary-table")

    expect(tableElement.textContent).toBe("Summary")
})

test("checks if table exists", () => {
    const { getByTestId } = render(<Table />);
    const table = getByTestId("display-table");
    expect(table).toBeTruthy()
})