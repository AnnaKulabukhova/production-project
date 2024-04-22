import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Test toggle', () => {
    renderWithTranslation(<Sidebar />)
    const btn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})