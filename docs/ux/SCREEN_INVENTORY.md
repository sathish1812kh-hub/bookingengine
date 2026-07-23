# Screen Inventory & Component Specifications

## Key Screens Catalog

### 1. Visual Room Tape Chart (`/reservations/grid`)
- **Primary User**: Front Desk Agent / Operations Manager
- **Purpose**: Real-time Gantt-chart room availability matrix across properties and categories.
- **Inputs**: Date Picker, Category Filter, Floor Filter, Search Guest Name.
- **Outputs**: Interactive reservation bars (color-coded by booking status).
- **Actions**: Drag-to-extend stay, Click to assign room, Quick check-in modal.
- **KPIs**: Occupancy %, RevPAR, ADR, Unassigned Bookings Count.

### 2. Live Housekeeping Grid (`/rooms/status`)
- **Primary User**: Housekeeping Supervisor / Room Staff
- **Purpose**: Mobile & desktop room cleaning dispatch matrix.
- **Inputs**: Floor selector, Status filter (`dirty`, `cleaning`, `inspected`, `out_of_order`).
- **Actions**: Mark Clean button, Report Damage dialog, Reassign Housekeeper.

### 3. Smart Lock Keypad Manager (`/locks/issuance`)
- **Primary User**: Front Desk / Night Auditor
- **Purpose**: Issue cryptographic access codes and verify TTLock battery/online state.
- **Inputs**: Reservation ID selection, Valid Time Window (`[CheckIn, CheckOut]`).
- **Outputs**: Generated 6-digit passcode, SMS/Email delivery status, Access log feed.

### 4. Double-Entry Journal Posting Workspace (`/financials/ledger`)
- **Primary User**: Property Accountant / CFO
- **Purpose**: Manual & automated double-entry journal entry recording.
- **Inputs**: Transaction Date, Reference ID, Debit Account, Credit Account, Amounts.
- **Invariants**: DB-enforced $\sum \text{Debits} = \sum \text{Credits}$ check indicator.
- **Actions**: Post Entry button, Reverse Entry button.

### 5. Daily 3-Way Reconciliation Workspace (`/reconciliation/daily-run`)
- **Primary User**: Accountant / Auditor
- **Purpose**: Automated matching of internal ledger vs Stayflexi PMS vs Gateway CSVs.
- **Tables**: Unmatched Ledger Lines, Unmatched Gateway Lines, Fee Discrepancies.
- **Actions**: "Auto-Match", "Accept Fee Difference", "Flag Unmatched".
