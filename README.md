
# NTWIST Frontend Assignment

This project is a simple multi-page web application built using **HTML**, **CSS**, and **Vanilla JavaScript**. It demonstrates various frontend skills like form validation, DOM manipulation, and styling.

## Pages Implemented

### 1. **Contact Form (Page 1)**

- **HTML5 Validation**: Includes name, email, and message fields with required validations.
- **Time Tracking**: Tracks how much time the user spends filling out the form.
- **Form Submission**: Upon submission, a confirmation message is shown, and the form resets.
- **Star Rating**: After the form is submitted, the user can rate the experience from 1 to 5 stars. The rating is displayed below the stars.

**Endpoint**: `/index.html`

### 2. **Sortable List Viewer (Page 2)**

- **Hardcoded List**: Displays a list of names in an unordered list (`<ul>`).
- **Sort Button**: A button is provided to sort the list alphabetically using the **Bubble Sort algorithm**.
- The sorting happens dynamically, without a page reload.

**Endpoint**: `/sort.html`

### 3. **FAQ Accordion (Page 3)**

- **Accordion**: An FAQ section where each question expands or collapses when clicked.
- **No JavaScript**: This page uses **HTML** and **CSS only** to create the accordion functionality, using the `<details>` and `<summary>` tags.

**Endpoint**: `/faq.html`

## Bonus Section

- **Star Rating Widget**: After the form is submitted, a star rating system allows users to rate the experience from 1 to 5 stars. The rating is displayed below the stars.

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Vaibhav4228/ntwist-frontend-assignment.git
   ```

2. Open the HTML files (`index.html`, `sort.html`, `faq.html`) directly in your browser.

## Technologies Used

- **HTML5**
- **CSS3** (Flexbox and Grid)
- **Vanilla JavaScript**

## Folder Structure

```

ntwist-frontend-assignment/
├── index.html            # Page 1: Contact Form with Validation
├── faq.html              # Page 3: FAQ Accordion (No JS)
├── sort.html             # Page 2: Sortable List Viewer
├── assets/
│   ├── css/
│   │   ├── styles.css    # Common styles for all pages
│   │   ├── faq.css       # Specific styles for FAQ page
│   │   ├── sort.css      # Specific styles for Sortable List page
│   └── js/
│       ├── script.js     # Common JS for all pages
│       ├── sort.js       # JS for sorting list (Page 2)
│       └── faq.js        # JS if needed for additional functionality (Page 3)
├── README.md             # Documentation file
```
