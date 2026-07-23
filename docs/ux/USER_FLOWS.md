# End-to-End User Workflows

```mermaid
sequenceDiagram
    autonumber
    actor Guest
    actor FrontDesk
    participant Storefront as Next.js Storefront
    participant API as Hono API Worker
    participant DB as PostgreSQL DB
    participant Lock as TTLock Cloud API
    participant Ledger as Accounting Ledger

    Guest->>Storefront: Select Room & Dates -> Pay via Stripe
    Storefront->>API: POST /api/reservations/book
    API->>DB: Create Reservation & Folio (Status: Confirmed)
    API->>Ledger: Post Unearned Revenue Journal Entry (Debit Cash, Credit Deferred Rev)
    API-->>Guest: Booking Confirmed (Reservation Code)

    Note over FrontDesk, Lock: Check-in Date (14:00)
    FrontDesk->>API: POST /api/check-in/{reservation_id}
    API->>Lock: Generate Offline Passcode (CheckIn to CheckOut)
    Lock-->>API: Passcode: "849204"
    API->>DB: Save Passcode & Update Room Status to Occupied
    API-->>FrontDesk: Display Passcode & Send SMS to Guest
```

## Core Workflows Catalog
1. **Guest Online Booking**: Search -> Rate Select -> Stripe Payment -> Folio Creation -> Deferred Revenue Posting.
2. **Walk-in Booking & Instant Check-in**: Front Desk Form -> Card Swipe / Cash -> Instant Lock Passcode Generation.
3. **Daily Financial Closing & 3-Way Reconciliation**: Night Auditor triggers closing -> Reconcile Svc compares PMS vs Gateway vs Bank -> Flags discrepancies.
4. **TTLock Emergency Passcode Issue**: Staff selects room -> Edge Worker generates AES-key passcode offline -> Transmitted to guest phone.
5. **Closed-Period Financial Reopening**: Accountant requests reopen -> Chief Accountant / Owner receives approval task -> Audit log records justification.
