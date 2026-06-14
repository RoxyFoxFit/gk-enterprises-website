/**
 * G.K. Enterprises — Contact Form → Google Sheets
 *
 * Setup:
 * 1. Create a new Google Sheet (e.g. "G.K. Enterprises Enquiries")
 * 2. Extensions → Apps Script → paste this file → Save
 * 3. Run "setupSheet" once from the editor (authorize when prompted)
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL (ends with /exec)
 * 6. Add it to your project .env as VITE_GOOGLE_SHEET_URL=<that-url>
 */

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Form Responses');

  if (!sheet) {
    sheet = ss.insertSheet('Form Responses');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'Full Name',
      'Company Name',
      'Phone',
      'Email',
      'Requirement Type',
      'Quantity',
      'Message',
    ]);
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 8);
  }
}

function doPost(e) {
  try {
    setupSheet();

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses');
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.companyName || '',
      data.phone || '',
      data.email || '',
      data.requirementType || '',
      data.quantity || '',
      data.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'G.K. Enterprises contact form endpoint is running',
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
