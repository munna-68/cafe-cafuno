const imageCache = new Map();

export function preloadImage(src) {
  if (!src) {
    return Promise.resolve(null);
  }

  if (imageCache.has(src)) {
    return imageCache.get(src);
  }

  const promise = new Promise((resolve) => {
    const image = new Image();
    let settled = false;

    const finish = (status) => {
      if (settled) {
        return;
      }

      settled = true;
      resolve({ src, status });
    };

    image.decoding = 'async';
    image.onload = () => finish('loaded');
    image.onerror = () => finish('error');
    image.src = src;

    if (typeof image.decode === 'function') {
      image
        .decode()
        .then(() => finish('decoded'))
        .catch(() => {
          // onload / onerror will resolve the promise.
        });
    }
  });

  imageCache.set(src, promise);
  return promise;
}

export function preloadImages(urls = []) {
  return Promise.all([...new Set(urls.filter(Boolean))].map(preloadImage));
}

export function scheduleIdleTask(callback) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (typeof window.requestIdleCallback === 'function') {
    return window.requestIdleCallback(() => callback(), { timeout: 1500 });
  }

  return window.setTimeout(callback, 1);
}

export function cancelIdleTask(handle) {
  if (typeof window === 'undefined' || handle == null) {
    return;
  }

  if (typeof window.cancelIdleCallback === 'function') {
    window.cancelIdleCallback(handle);
    return;
  }

  window.clearTimeout(handle);
}