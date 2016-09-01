module.exports = {
  powerSettingsChange: function() {
    return {
      macEventId: '8',
      timestamp: new Date().toLocaleString(),
      name: "POWER_SETTINGS_CHANGE"
    }
  },
  wentToSleep: function(time) {
    return {
      macEventId: '9',
      timestamp: new Date(time*1000).toLocaleString(),
      name: "COMPUTER_SLEEP"
    }
  },
  wokeFromSleep: function(time) {
    return {
      macEventId: '10',
      timestamp: new Date(time*1000).toLocaleString(),
      name: "COMPUTER_WAKE"
    }
  },
  bootup: function(time) {
    return {
      macEventId: '11',
      timestamp: new Date(time*1000).toLocaleString(),
      name: "COMPUTER_BOOT"
    }
  },
  shutdown: function(time) {
    return {
      macEventId: '12',
      timestamp: new Date(time*1000).toLocaleString(),
      name: "COMPUTER_SHUTDOWN"
    }
  }
}
