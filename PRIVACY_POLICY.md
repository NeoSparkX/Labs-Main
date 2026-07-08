# Privacy Policy for Expense Tracker

**Effective Date:** July 8, 2026

NeoSparkx ("we", "our", or "us") operates the **Expense Tracker** mobile application (the "App"). We are committed to protecting and respecting your privacy.

This Privacy Policy explains how we handle your information when you use the App.

---

## 1. 100% Offline and Device-Bound Data Storage
The App is designed as an **offline-first** utility. 
*   **No Internet Data Transmission**: The App does **not** collect, store, transmit, or share any personal, financial, or transaction data over the internet.
*   **Local SQLite Database**: All transaction entries, account names, debt balances, and categories are saved strictly on your local device storage inside a secured sandbox database (`Room/SQLite`).
*   **Zero Remote Server Collection**: We do not maintain any cloud databases or external logging servers. Your financial information never leaves your device.

## 2. Permissions We Request and Why
To function correctly, the App requests specific hardware permissions on your device. Here is why we need them:
*   **Biometric Sensors (`USE_BIOMETRIC`)**: Used exclusively to secure and lock/unlock the App locally using your fingerprint or face recognition, protecting your logs from unauthorized local physical access. No biometric data is ever read or stored by the App.
*   **Notifications (`POST_NOTIFICATIONS` / `RECEIVE_BOOT_COMPLETED`)**: Used to schedule daily inexact reminders to log your expenses.

## 3. Data Portability (Excel/PDF Exports)
The App includes local document compilation capabilities (Excel import/export using Apache POI, and PDF report creation using Android's native graphics library).
*   These exports are generated **locally** on your device.
*   When importing or exporting files, the App uses Android's System File Picker (`GetContent` and `CreateDocument` APIs) to read/write specific files. The App does **not** request broad storage permissions.

## 4. Children's Privacy
Since we do not collect any personal data, we do not knowingly or unknowingly collect or process any data from children.

## 5. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. Any changes will be posted in this file and updated in the App's Play Store description.

## 6. Contact Us
If you have any questions about this Privacy Policy or our local data practices, please contact us at:
*   **Developer Name**: NeoSparkx
*   **Email**: support@neosparkx.com
