# SauceDemo UI Test Automation Suite (Playwright)

## 🔍 Overview
This is a UI automation test suite for [saucedemo.com](https://www.saucedemo.com/) using Playwright. It includes:
- Functional UI Tests
- Visual Regression Tests
- Accessibility Tests

---

## 📋 Prerequisites
- Node.js >= 18
- NPM >= 9
- Chromium (auto-installed via Playwright)

Install dependencies:
```bash
npm install
```

---

## 🚀 Running Tests

### 1. All tests (headless)
```bash
npx playwright test
```

### 2. Headed mode (with browser UI)
```bash
npx playwright test --headed
```

### 3. View HTML Report
```bash
npx playwright show-report
```

---

## 📁 Report Samples
HTML reports are stored under `playwright-report/`.

---

## 📽️ Demo Videos
- [Headed Execution Demo](./recordings/headed-demo.mp4)
- [Headless Execution Demo](./recordings/headless-demo.mp4)

---

## 📦 Folder Structure

```
pages/         # Page Object Models
tests/         # Test specs
reports/       # Logs/screenshots/videos
utils/         # Reusable helpers
```
