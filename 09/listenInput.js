function listenInput(dom, callback, {
  timeout = 300,
  useCompositionEvent = true
} = {}) {
  let value = '';
  let inInputEvent = false;
  let inCompositionEvent = false;
  let trigger = createDelayFunction(valueChanged, timeout);

  // Return a function that can remove listeners added here.
  return enabledEvent(dom);

  function valueChanged(val) {
    if (val === value) {
      return;
    } else {
      value = val;
    }

    callback(value, {
      dom: dom
    });
  }

  function enabledEvent(dom) {
    dom.addEventListener('keyup', keyup);
    dom.addEventListener('input', input);

    useCompositionEvent && dom.addEventListener('compositionstart', compositionstart);
    useCompositionEvent && dom.addEventListener('compositionend', compositionend);

    return function () {
      dom.removeEventListener('keyup', keyup);
      dom.removeEventListener('input', input);

      useCompositionEvent && dom.removeEventListener('compositionstart', compositionstart);
      useCompositionEvent && dom.removeEventListener('compositionend', compositionend);
    };

    function keyup() {
      if (inInputEvent) {
        dom.removeEventListener('keyup', keyup);
      } else {
        trigger(this.value);
      }
    }

    function input() {
      if (!inInputEvent) {
        inInputEvent = true;
      }

      if (!inCompositionEvent) {
        trigger(this.value);
      }
    }

    function compositionstart() {
      inCompositionEvent = true;
    }

    function compositionend() {
      inCompositionEvent = false;
      trigger(this.value);
    }
  }
}

function createDelayFunction(fn, timeout = 300) {
  let timeoutId = -1;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, timeout);
  }
}