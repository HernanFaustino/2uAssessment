import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import { Table, Divider, Tag, Typography, Button } from 'antd';

import { useInvoices } from '../../contexts/invoice';
import InvoiceList from '../../components/InvoiceList';

const { Title } = Typography;


function InvoicePage(props) {
  const { getPendingInvoices } = useInvoices();

  useEffect(() => {
    fetchData();
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