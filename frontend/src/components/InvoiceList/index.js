import React, { useState } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Tag, Button, Table, message } from 'antd';

import styles from './styles';
import { useInvoices } from "../../contexts/invoice";
import ErrorAlert from "../ErrorAlert";


function InvoiceList({ classes }) {
  const { approveInvoices, invoices } = useInvoices();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Vendor Name',
      dataIndex: 'vendorName',
      key: 'vendorName',
    },
    {
      title: 'Remittance Address',
      dataIndex: 'remittanceAddress',
      key: 'remittanceAddress',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => (
        <span>
          { status === 'pending' ? (
            <Tag color="geekblue" key={status}>
              {status.toUpperCase()}
            </Tag>
          ): (
            <Tag color='green' key={status}>
                {status.toUpperCase()}
              </Tag>
          )}
        </span>
      ),
    }
  ];

  const approveSelectedInvoices = async () => {
    try {
      setLoading(true);
      await approveInvoices(selectedRowKeys);
      setLoading(false);
      setSelectedRowKeys([]);
      message.success("Invoices approved");
    } catch (e) {
      message.error(e.message());
    }
  };

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys && selectedRowKeys.length > 0;

  return (
    <React.Fragment>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={approveSelectedInvoices} disabled={!hasSelected} loading={loading}>
          Approve
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={invoices} rowKey="id"/>
    </React.Fragment>
  );
}

InvoiceList.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default injectSheet(styles)(InvoiceList);
