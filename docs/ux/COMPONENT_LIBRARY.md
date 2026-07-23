# Reusable UI Component Library Specification

## Core Component Catalog (`packages/ui`)

1. **`DataTable`**: Server-side paginated, filterable, sorting data table with export capabilities.
2. **`MoneyInput`**: Currency-aware input component handling cents/decimals without rounding errors.
3. **`DateRangePicker`**: Preset-enabled date range picker with timezone awareness.
4. **`StatusBadge`**: Color-coded badges for booking status (`confirmed`, `checked_in`, `checked_out`, `cancelled`).
5. **`PasscodeWidget`**: Smart lock passcode display card with quick copy and SMS dispatch trigger.
6. **`LedgerEntryRow`**: Double-entry journal debit/credit input pair with live balance equality indicator.
7. **`AuditTimeline`**: Vertical historical timeline displaying audit events (`who`, `what`, `when`, `diff`).
8. **`RoomStatusCard`**: Housekeeping card with status dropdown (`dirty` -> `cleaning` -> `inspected`).
9. **`KPIStatWidget`**: Metric summary widget with percentage delta indicator and target baseline.
10. **`ApprovalDialog`**: Standardized confirmation dialog for financial overrides and period reopening.
