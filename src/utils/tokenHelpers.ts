export function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("accessToken");
  }

  return '';
}

export function updateToken({ accessToken }: { accessToken: string }) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', accessToken);
  }

  return '';
}

export function deleteToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("accessToken");
  }
}

