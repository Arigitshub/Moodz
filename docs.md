# Mood &amp; Strain Tracker - Documentation

## Overview

The Mood &amp; Strain Tracker is a simple web application designed to help users log their daily moods and any cannabis strains they may be using. It provides a straightforward way to keep track of how different strains might affect your mood over time. This is a Minimum Viable Product (MVP) focusing on core functionality and ease of use.

## Features

1.  **Mood Logging**:
    *   Users can select their current mood from a predefined dropdown menu.
    *   Available mood options include: Happy, Calm, Anxious, Tired, Creative, Sad, Energetic.

2.  **Strain Logging (Optional)**:
    *   Users can optionally enter the name of the cannabis strain they are using in a text input field.
    *   This field is for free-text input, without auto-suggestions.

3.  **Timestamping**:
    *   Each mood and strain entry is automatically timestamped with the current date and time when it is saved.

4.  **Display of Recent Logs**:
    *   The application displays the 10 most recent log entries on the page.
    *   Each log entry shows the selected mood, strain (if entered), and the timestamp of the entry.

5.  **Saving Data**:
    *   All logged data is stored locally in the browser's local storage.
    *   This means your data is saved within your browser and is not accessible to others unless they use the same browser on the same device.
    *   No external database or server is used for this MVP.

## How to Use

1.  **Select your mood**: Use the dropdown menu labeled "Current Mood" to choose the mood that best describes how you are feeling.
2.  **Enter strain (optional)**: If you have used a cannabis strain and wish to log it, enter the strain name in the "Strain (Optional)" text field. If not, you can leave this field blank.
3.  **Log Entry**: Click the "Log Entry" button to save your mood and strain entry.
4.  **View Recent Logs**: The "Recent Logs" section below the form will update to display your latest entry, along with the previous logs (up to 10 entries).

## Technologies Used

*   **HTML**: For structuring the web page and its content.
*   **CSS**: For styling the user interface to be clean and easy to use, with basic responsiveness.
*   **JavaScript**: For handling user interactions, saving data to local storage, and dynamically updating the display of recent logs.

## Data Storage

*   This application uses **local storage** to save your data directly in your web browser.
*   **No server or database is used**, ensuring your data remains on your device and is not transmitted over the internet.
*   **Privacy**: As data is stored locally, it is as private as your browser's local storage. Clearing your browser's data will also remove the logged entries.

## MVP Limitations

*   This is a basic MVP, so it does not include advanced features such as user accounts, data export, detailed analytics, or strain databases.
*   Data is limited to local storage and is not synced across devices or browsers.
*   The styling is basic and focused on functionality over advanced aesthetics.

This documentation should help you understand the basic functionality and usage of the Mood &amp; Strain Tracker MVP.
