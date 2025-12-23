const KEY = "heroio_installed_app_ids";

export function getInstalledIds() {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isInstalled(id) {
  const ids = getInstalledIds();
  return ids.includes(Number(id));
}

export function installId(id) {
  const ids = getInstalledIds();
  const nid = Number(id);
  if (ids.includes(nid)) return ids;
  const next = [...ids, nid];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function uninstallId(id) {
  const nid = Number(id);
  const next = getInstalledIds().filter((x) => x !== nid);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
