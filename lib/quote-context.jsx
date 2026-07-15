'use client';
import { createContext, useContext, useState } from 'react';

const QuoteContext = createContext({ open: false, setOpen: () => {} });

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  return <QuoteContext.Provider value={{ open, setOpen }}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  return useContext(QuoteContext);
}
