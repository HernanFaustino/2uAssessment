import Sequelize from "sequelize";
import { sequelize } from '../database/database';

const Invoice = sequelize.define('invoices', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    invoiceNumber: {
        type: Sequelize.INTEGER,
        field: 'invoice_number',
    },
    total: {
        type: Sequelize.DECIMAL,
    },
    currency: {
        type: Sequelize.TEXT,
    },
    invoiceDate: {
        type: Sequelize.DATE,
        field: 'invoice_date'
    },
    dueDate: {
        type: Sequelize.DATE,
        field: 'due_date'
    },
    vendorName: {
        type: Sequelize.TEXT,
        field: 'vendor_name'
    },
    remittanceAddress: {
        type: Sequelize.TEXT,
        field: 'remittance_address',
    },
    status: {
        type: Sequelize.ENUM,
        values: ['pending', 'approved'],
        defaultValue: 'pending',
    }
}, {
  timestamps: false
});

export default Invoice;