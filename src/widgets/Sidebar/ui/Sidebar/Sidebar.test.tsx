import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "../..";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Test toggle', () => {
    componentRender(<Sidebar />)
    const btn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})