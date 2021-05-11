import { render } from "@testing-library/react";
import App from "./App";



test("render an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello React Test Library/);
    expect(h1).toHaveTextContent(
        "Hello React Test Library"
    
    );
});