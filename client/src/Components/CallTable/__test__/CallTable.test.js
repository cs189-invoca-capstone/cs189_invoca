import React from "react"
import CallTable from "../CallTable"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("checks if table contains \"summary\"", () => {
    const component = render(<CallTable />);
    const tableElement = component.getByTestId("summary-table")

    expect(tableElement.textContent).toBe("Summary")
})

test("checks if table exists", () => {
    const { getByTestId } = render(<CallTable />);
    const table = getByTestId("display-table");
    expect(table).toBeTruthy()
})