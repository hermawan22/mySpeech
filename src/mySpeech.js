/*
*   mysSpeech.js
*   (c) 2016 by Hermawan
*   mySpeech may be freely distributed under the MIT license.
*/
;(function(global) {
  var mySpeech = function(elem) {
    // return constructor
    return new mySpeech.init(elem);
  }

  // constructor of mySpeech
  mySpeech.init = function(elem) {
    // to make property/method not reference to global
    var self = this;

    // checking element
    if(elem.nodeName) {
      self.elem = elem;
    } else {
      self.elem = document.querySelector(elem);
    }

    // get text content of elements
    self.textContent = this.elem.textContent;
    // get speechSynthesis object
    self.synth = global.speechSynthesis;
    // make object from SpeechSynthesisUtterance constructor function
    self.utterThis = new SpeechSynthesisUtterance(self.textContent);

    // Set default value of language, pitch, and rate
    self.languages = "en-US";
    self.pitchs = 1;
    self.rates = 1;
  }

  // Set every method on mySpeech prototype
  mySpeech.prototype = {
    // method to set language of synthesis
    language: function(lang) {
      this.languages = lang;

      return this;
    },
    // method to set pitch of synthesis
    pitch: function(pitch) {
      this.pitchs = pitch;

      return this;
    },
    // method to set rate of synthesis
    rate: function(rate) {
      this.rates = rate;

      return this;
    },
    // method for run of speech synthesis
    onSpeak: function() {
      this.utterThis.lang = this.languages;
      this.utterThis.pitch = this.pitchs;
      this.utterThis.rate = this.rates;

      this.synth.speak(this.utterThis);
    },
    // method for run of speech synthesis with click event
    onClickSpeak: function(eventElement) {
      // Get this from the mySpeech object not global object
      // Then put in 'that variable'
      var that = this;

      // checking condition of eventElement
      if(eventElement.nodeName) {
        that.eventElement = eventElement;
      } else if(eventElement == window) {
        that.eventElement = window;
      } else {
        that.eventElement = document.querySelector(eventElement);
      }

      // run speech synthesis with click event
      that.eventElement.onclick = function(e) {
        e.preventDefault();

        that.utterThis.lang = that.languages;
        that.utterThis.pitch = that.pitchs;
        that.utterThis.rate = that.rates;

        that.synth.speak(that.utterThis);
      }
    }
  }

  // Make references from mySpeech.init.prototype to mySpeech.prototype
  mySpeech.init.prototype = mySpeech.prototype;

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // Set for module
    module.exports = mySpeech;
  } else {
    // Set for global name in browser
    global.mySpeech = mySpeech;
  }
}(window))
