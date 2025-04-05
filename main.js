import './style.css'

// --- DOM Elements ---
const logForm = document.getElementById('log-form');
const moodSelect = document.getElementById('mood-select');
const strainInput = document.getElementById('strain-input');
const logsList = document.getElementById('logs-list');

const MAX_LOGS_DISPLAY = 10; // Max logs to display
const LOCAL_STORAGE_KEY = 'moodTrackerLogs';

// --- Functions ---

/**
 * Loads logs from local storage.
 * @returns {Array} An array of log objects.
 */
function loadLogs() {
  const logsJson = localStorage.getItem(LOCAL_STORAGE_KEY);
  try {
    return logsJson ? JSON.parse(logsJson) : [];
  } catch (e) {
    console.error("Error parsing logs from local storage:", e);
    return []; // Return empty array on error
  }
}

/**
 * Saves logs to local storage.
 * @param {Array} logs - The array of log objects to save.
 */
function saveLogs(logs) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(logs));
}

/**
 * Renders the log entries in the list.
 * @param {Array} logs - The array of log objects to display.
 */
function renderLogs(logs) {
  logsList.innerHTML = ''; // Clear existing logs

  // Display the most recent logs first, up to MAX_LOGS_DISPLAY
  const logsToDisplay = logs.slice(-MAX_LOGS_DISPLAY).reverse();

  if (logsToDisplay.length === 0) {
    logsList.innerHTML = '<li>No logs yet. Add one above!</li>';
    return;
  }

  logsToDisplay.forEach(log => {
    const listItem = document.createElement('li');

    const moodText = `Mood: <strong>${log.mood}</strong>`;
    const strainText = log.strain ? `<span class="strain"> | Strain: ${log.strain}</span>` : '';
    const timeText = `<span class="timestamp">${new Date(log.timestamp).toLocaleString()}</span>`;

    listItem.innerHTML = `${moodText}${strainText}${timeText}`;
    logsList.appendChild(listItem);
  });
}

/**
 * Handles the form submission.
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent page reload

  const mood = moodSelect.value;
  const strain = strainInput.value.trim(); // Get strain and remove whitespace
  const timestamp = new Date().toISOString(); // Use ISO string for consistency

  if (!mood) {
    alert("Please select a mood."); // Basic validation
    return;
  }

  const newLog = {
    mood,
    strain: strain || null, // Store null if strain is empty
    timestamp,
  };

  // Add the new log
  const currentLogs = loadLogs();
  currentLogs.push(newLog);

  // Save and re-render
  saveLogs(currentLogs);
  renderLogs(currentLogs);

  // Reset the form
  logForm.reset();
  moodSelect.value = ""; // Explicitly reset select dropdown placeholder
}

// --- Initialization ---

// Add event listener to the form
logForm.addEventListener('submit', handleFormSubmit);

// Load and display initial logs when the page loads
const initialLogs = loadLogs();
renderLogs(initialLogs);
