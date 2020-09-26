import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import { Typography, Button } from 'antd';
import socketIOClient from 'socket.io-client';

import { useInvoices } from '../../contexts/invoice';
import InvoiceList from '../../components/InvoiceList';

const { Title } = Typography;
const SOCKET_ENDPOINT = "http://127.0.0.1:8001";

function InvoicePage(props) {
  const { getPendingInvoices } = useInvoices();

  useEffect(() => {
    fetchData();
    const socket = socketIOClient(SOCKET_ENDPOINT);
    socket.on("dataUpdated", data => {
      fetchData();
    });
    return () => socket.disconnect();
  }, []);

  const fetchData = async () => {
      try {
        await getPendingInvoices();
      } catch (error) {
        console.error("Error fetching invoinces");
      }
  };

  return (
    <React.Fragment>
      <Title>Invoices</Title>
      <InvoiceList />
    </React.Fragment>
  );

}

InvoicePage.propTypes = {
  classes: PropTypes.shape(),
};

export default InvoicePage;