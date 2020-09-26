import React, { useState, useContext } from 'react';
import api from "../utils/api";

const InvoiceContext = React.createContext();

const InvoiceProvider = ({ children }) => {
  const [invoicesState, setInvoicesState] = useState({
    invoices: [],
  });

  return (
    <InvoiceContext.Provider value={{ invoicesState, setInvoicesState }}>
      {children}
    </InvoiceContext.Provider>
  );
};

const useInvoices = () => {
  const { invoicesState, setInvoicesState } = useContext(InvoiceContext);

  const { invoices } = invoicesState;


  function setInvoices(newInvoices) {
    setInvoicesState(state => ({
      ...state,
      invoices: newInvoices,
    }));
  }

  async function getPendingInvoices() {
    try {
      const { data } = await api.get('invoice/pending');
      setInvoices(data.data);
    } catch (e) {
      throw new Error('Unable to get pending invoices.');
    }
  }

  async function approveInvoices(ids) {
    let updatedIds = []
    try {
      for (const id of ids) {
        const { data } = await api.post(`invoice/approve/${id}`);
        updatedIds.push(id);
      }
      const updatedData = invoices.filter(invoice => updatedIds.indexOf(invoice.id) === -1);
      setInvoices(updatedData);
    } catch (e) {
      throw new Error('Unable to approve invoices.');
    }
  }

  return {
    invoices,
    getPendingInvoices,
    approveInvoices,
  };
};

export { InvoiceProvider, useInvoices };