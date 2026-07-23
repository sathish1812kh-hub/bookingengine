# Navigation Matrix & Navigation Policies

## Role Navigation Mappings

### 1. General Manager (`hotel_manager`)
- **Landing Page**: `/dashboard/operations`
- **Sidebar**:
  - Dashboard (`/dashboard/operations`)
  - Reservations (`/reservations`)
  - Room Status & Housekeeping (`/rooms/status`)
  - Smart Locks (`/locks`)
  - Daily Financials & Folios (`/financials/folios`)
  - Reconciliation (`/reconciliation`)
  - Revenue Manager (`/revenue/rates`)
  - Audit Trail (`/audit`)
- **Quick Actions**: "New Walk-in Booking", "Issue Emergency Passcode", "Approve Refund".
- **Restricted Pages**: System Infrastructure Settings (`/settings/system`).

### 2. Front Desk Agent (`front_desk`)
- **Landing Page**: `/frontdesk/arrivals`
- **Sidebar**:
  - Arrivals & Departures (`/frontdesk/arrivals`)
  - Tape Chart / Room Grid (`/frontdesk/grid`)
  - In-House Guests (`/frontdesk/in-house`)
  - Keycard & Smart Locks (`/locks/issuance`)
  - Housekeeping View (`/rooms/housekeeping`)
- **Quick Actions**: "Quick Check-in", "Send Lock Code", "Add Folio Charge".
- **Hidden / Restricted Pages**: Accounting Ledger (`/financials/ledger`), Closed-Period Reopen (`/financials/period-close`), Revenue Strategy (`/revenue/settings`).

### 3. Property Accountant (`accountant`)
- **Landing Page**: `/financials/ledger`
- **Sidebar**:
  - Executive Financials (`/financials/summary`)
  - General Ledger & Journal Entries (`/financials/ledger`)
  - Chart of Accounts (`/financials/accounts`)
  - Daily 3-Way Reconciliation (`/reconciliation`)
  - Bank Feed Upload (`/reconciliation/upload`)
  - Accounts Payable / Receivable (`/financials/ap-ar`)
- **Quick Actions**: "Post Journal Entry", "Run Reconciliation", "Export Financial Statements".
- **Hidden Pages**: Smart Lock Pairing (`/locks/hardware`), Room Maintenance Dispatch (`/rooms/maintenance`).

### 4. Housekeeping Staff (`housekeeper`)
- **Landing Page**: `/mobile/housekeeping` (Mobile-optimized layout)
- **Sidebar**:
  - Assigned Rooms (`/mobile/housekeeping/assigned`)
  - Maintenance Flagging (`/mobile/housekeeping/maintenance`)
- **Quick Actions**: "Mark Clean", "Mark Inspecting", "Flag Maintenance Issue".
- **Hidden Pages**: All financial, pricing, and administrative pages.
