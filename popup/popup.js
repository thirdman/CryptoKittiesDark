"use strict";

function click(e) {
  chrome.tabs.executeScript(null, {
    code: "document.body.style.backgroundColor='" + e.target.id + "'"
  });
  console.log("clidk");
  window.close();
}

function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({ text: "ON" });
  chrome.alarms.create({ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
}

function clearAlarm() {
  chrome.browserAction.setBadgeText({ text: "" });
  chrome.alarms.clearAll();
  window.close();
}

document.getElementById("sampleSecond").addEventListener("click", setAlarm);
document.getElementById("15min").addEventListener("click", setAlarm);
document.getElementById("30min").addEventListener("click", setAlarm);
document.getElementById("cancelAlarm").addEventListener("click", clearAlarm);
