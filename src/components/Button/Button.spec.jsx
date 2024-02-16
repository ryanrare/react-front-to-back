import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from '.'

describe('<Button />', () => {
    it('should render the button with the text "load more"', () => {
        render(<Button text="load more"/>);
        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });
    it('should call function on button click', () => {
        const fn = jest.fn();

        render(<Button text="load more" onClick={fn}/>);

        const button = screen.getByRole('button', { name: /load more/i });
        fireEvent.click(button);
        
        expect(fn).toHaveBeenCalledTimes(1);
    });
});