import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /Titulo/i })).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
