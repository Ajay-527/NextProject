import { render, screen, waitFor } from '@testing-library/react';
import  ProductsData  from './products/page'; // Adjust import path based on your Next.js file structure

describe('Frontend Integration Tests', () => {
    beforeAll(() => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            text: () => Promise.resolve('Mocked data'),
          })
        ) as jest.Mock;
      });
      it('fetches data correctly', async () => {
        render(<ProductsData />);
        await waitFor(() => expect(global.fetch).toHaveBeenCalled());
        const dataElement = screen.getByText(/Data: Mocked data/i);
        expect(dataElement).toBeInTheDocument();
      });
  });
  