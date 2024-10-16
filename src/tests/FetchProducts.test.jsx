// FetchProducts.test.jsx

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useProducts } from '../components/FetchProducts';

// Mocking the fetch function before each test
global.fetch = vi.fn();

describe('useProducts Custom Hook', () => {
  beforeEach(() => {
    // Reset the mock before each test
    fetch.mockClear();
  });

  it('fetches correct product data', async () => {
    // Mocking the response of the fetch call
    fetch.mockResolvedValueOnce({
      json: async () => [
        { id: 1, title: 'Product 1' },
        { id: 2, title: 'Product 2' },
      ],
    });

    const { result } = renderHook(() => useProducts());

    // Wait for the products to be fetched
    await waitFor(() => {
      expect(result.current.products).toBeTruthy();
      expect(result.current.products.length).toBeGreaterThan(0); // Check if it's an array and has items
    });

    // Optionally check if the data is in the expected format
    expect(result.current.products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, title: 'Product 1' }),
        expect.objectContaining({ id: 2, title: 'Product 2' }),
      ])
    );
  });
});
