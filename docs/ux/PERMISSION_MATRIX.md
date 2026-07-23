# System Permission Matrix

## Permission Naming Convention
Format: `<domain>:<resource>:<action>` (e.g., `booking:reservation:create`, `ledger:journal:post`, `iot:lock:issue`).

---

## Complete Permission Catalogue

### 1. Property & Inventory Permissions
- `property:manage:create`
- `property:manage:update`
- `room:category:create`
- `room:category:update`
- `room:inventory:update_status` (Clean, Dirty, Maintenance)

### 2. Reservation & Guest Permissions
- `booking:reservation:read`
- `booking:reservation:create`
- `booking:reservation:update`
- `booking:reservation:cancel`
- `booking:folio:charge`
- `booking:folio:refund`

### 3. Hardware & Smart Lock Permissions
- `iot:lock:pair`
- `iot:lock:issue_code`
- `iot:lock:revoke_code`
- `iot:lock:read_logs`

### 4. Financial Ledger & Accounting Permissions
- `ledger:account:read`
- `ledger:account:manage`
- `ledger:journal:post`
- `ledger:journal:reverse`
- `ledger:period:close`
- `ledger:period:reopen_approve`

### 5. Daily Reconciliation Permissions
- `reconcile:run:execute`
- `reconcile:discrepancy:resolve`
- `reconcile:bank_feed:upload`

### 6. Revenue Intelligence & Dynamic Pricing Permissions
- `revenue:strategy:read`
- `revenue:strategy:update`
- `revenue:price:approve_override`
- `revenue:competitor:read`

### 7. Audit & System Administration Permissions
- `audit:logs:read`
- `audit:logs:export`
- `system:user:manage`
- `system:role:assign`

---

## Role-Permission Mapping Matrix

| Permission Key | Super Admin | Owner | GM | Front Desk | Accountant | Housekeeper |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `property:manage:update` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `room:inventory:update_status` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `booking:reservation:create` | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| `booking:folio:refund` | ✅ | ✅ | ✅ (Limit) | ❌ | ✅ | ❌ |
| `iot:lock:issue_code` | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| `ledger:journal:post` | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| `ledger:period:reopen_approve`| ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `reconcile:run:execute` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| `revenue:price:approve_override`| ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `audit:logs:read` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
