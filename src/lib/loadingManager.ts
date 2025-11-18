type Subscriber = (pending: number) => void;

let pending = 0;
const subs = new Set<Subscriber>();

function notify() {
  for (const s of subs) s(pending);
}

export function addPromise<T>(p: Promise<T>) {
  pending++;
  notify();
  p.finally(() => {
    pending = Math.max(0, pending - 1);
    notify();
  });
}

export function increment() {
  pending++;
  notify();
}

export function decrement() {
  pending = Math.max(0, pending - 1);
  notify();
}

export function subscribe(cb: Subscriber) {
  subs.add(cb);
  cb(pending);
  return () => subs.delete(cb);
}

export function getPending() {
  return pending;
}

export default { addPromise, increment, decrement, subscribe, getPending };
